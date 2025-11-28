<template>
  <Card>
    <h1>Customize</h1>

    <input
      v-model="localData.name"
      placeholder="Name"
      class="transparent"
      style="font-size: x-large"
    />
    <input
      v-model="localData.username"
      placeholder="Username"
    />
    <input
      v-model="localData.url"
      placeholder="URL"
    />
    <textarea
      v-model="localData.bio"
      placeholder="Bio"
      style="height: 5rem"
    />

    <label>Avatar</label>
    <input
      type="file"
      @change="handleFile($event, 'avatar')"
    />

    <label>Banner</label>
    <input
      type="file"
      @change="handleFile($event, 'banner')"
    />

    <label>Accent Color</label>
    <input
      type="color"
      v-model="localData.accent"
    />

    <InteriorItem>
      <VStack>
        <label>Interests</label>
        <input
          v-model="interest"
          @keyup.enter="addInterest"
          class="input"
          placeholder="Press Enter to add"
        />

        <HStack>
          <span
            v-for="(tag, i) in localData.interests"
            :key="i"
            style="
              background: var(--foregroundColor);
              padding: 0.3rem 0.6rem;
              border-radius: 2rem;
              cursor: pointer;"
            @click="removeInterest(i)"
          >
            {{ tag }} ✕
          </span>
        </HStack>
      </VStack>
    </InteriorItem>
  </Card>
</template>

<script setup lang="ts">
  import { ref, watch } from 'vue'
  import type { Ref } from 'vue'
  import Card from '@/components/layout/Card.vue'
  import InteriorItem from '@/components/layout/InteriorItem.vue'
  import VStack from '@/components/layout/VStack.vue'
  import HStack from '@/components/layout/HStack.vue'

  const props = defineProps(['modelValue'])
  const emit = defineEmits(['update:modelValue'])
  const localData: Ref = ref({ ...props.modelValue })
  const interest: Ref<string> = ref('')

  watch(
    localData,
    () => emit('update:modelValue', localData.value),
    { deep: true }
  )

  const handleFile = (e: Event, field: keyof typeof localData.value) => {
    const target = e.target as HTMLInputElement
    const file = target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = () => {
        localData.value[field] = reader.result
      }
      reader.readAsDataURL(file)
    }
  }

  const addInterest = () => {
    if (interest.value.trim()) {
      localData.value.interests.push(interest.value.trim())
      interest.value = ''
    }
  }

  const removeInterest = (index: any) => {
    localData.value.interests.splice(index, 1)
  }
</script>
