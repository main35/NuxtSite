<script setup lang="ts">
  import { Icon } from '@iconify/vue'
  import { ref } from 'vue'

  import HStack from '+/layout/HStack.vue'
  import Navbar from '+/premade/navbar/Navbar.vue'
  import CardTitle from '+/utils/CardTitle.vue'

  interface CSVRow extends Record<string, unknown> {}

  const jsonOutput = ref<CSVRow[] | null>(null)
  const csvFileName = ref<string>('')
  const outputContainerVisible = ref<boolean>(false)

  function handleFileUpload(event: Event): void {
    const input = event.target as HTMLInputElement
    const file = input.files?.[0]

    if (!file) {
      alert('Select a CSV file first.')
      return
    }

    csvFileName.value = file.name
    const reader = new FileReader()

    reader.onload = (e: ProgressEvent<FileReader>) => {
      if (!e.target?.result) return
      const csvText = e.target.result.toString()
      jsonOutput.value = csvToJson(csvText)
      outputContainerVisible.value = true
    }

    reader.readAsText(file)
  }

  function csvToJson(csv: string): CSVRow[] {
    const lines: string[] = csv
      .split('\n')
      .map((line) => line.trim())
      .filter((line) => line)

    if (lines.length === 0) return []

    const headers: string[] = lines[0]!
      .split(',')
      .map((h) => h.trim().replace(/^"|"$/g, ''))

    return lines.slice(1).map((line) => {
      const values: string[] = line
        .split(',')
        .map((v) => v.trim().replace(/^"|"$/g, ''))
      const obj: CSVRow = {}

      headers.forEach((h, i) => {
        let value: any = values[i] || ''

        if (value.toLowerCase() === 'true') value = true
        else if (value.toLowerCase() === 'false') value = false

        obj[h] = value
      })
      return obj
    })
  }

  function downloadJson(): void {
    if (!jsonOutput.value) return

    const jsonStr = JSON.stringify(jsonOutput.value, null, 4)
    const blob = new Blob([ jsonStr ], { type: 'application/json' })
    const a = document.createElement('a')

    a.href = URL.createObjectURL(blob)
    a.download = csvFileName.value
      .replace('.csv', '.json')
      .replace('.CSV', '.json')
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }
</script>

<template>
  <div class="contentView">
    <CardTitle title="CSV to JSON" icon="solar:undo-right-line-duotone" />

    <HStack>
      <input
        type="file"
        id="csvFileInput"
        accept=".csv"
        @change="handleFileUpload"
      />
    </HStack>

    <div :class="{ hidden: !outputContainerVisible }">
      <div class="hStack">
        <h3>JSON:</h3>
      </div>

      <pre>{{ JSON.stringify(jsonOutput, null, 2) }}</pre>
    </div>

    <Navbar>
      <button
        :class="{ hidden: !outputContainerVisible }"
        @click="downloadJson"
        :disabled="!jsonOutput"
      >
        <Icon icon="solar:download-minimalistic-bold-duotone" />
        Download
      </button>
    </Navbar>
  </div>
</template>

<style scoped lang="sass">
  pre
    overflow: scroll
</style>
