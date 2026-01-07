import type {
  ResolvableArray,
  ResolvableMeta,
  ResolvableLink,
} from '@unhead/vue/types'

export default function setHeadMeta(config: {
  page: string
  subtitle: string
  group?: string
  image?: string
  icon?: string
}): void {
  const { t } = useI18n()

  const page: ComputedRef<string> = computed((): string => t(config.page))
  const subtitle: ComputedRef<string> = computed((): string =>
    t(config.subtitle)
  )
  const group: ComputedRef<string | undefined> = computed(
    (): string | undefined => (config.group ? t(config.group) : undefined)
  )

  const title: ComputedRef = computed((): string =>
    group.value
      ? `${page.value} - ${group.value}`
      : `${page.value} - ${t('meta.groups.ash')}`
  )

  // Meta-tags (includes image if specified)
  let meta: ResolvableArray<ResolvableMeta> = [
    { property: 'og:title', content: title.value },
    { property: 'og:description', content: subtitle.value },
    { name: 'description', content: subtitle.value },
    { name: 'mobile-web-app-capable', content: 'yes' },
    { name: 'apple-mobile-web-app-capable', content: 'yes' },
    {
      name: 'apple-mobile-web-app-status-bar-style',
      content: 'black-translucent',
    },
  ]
  if (config.image) {
    meta.push({ property: 'og:image', content: config.image })
  }

  // Link tags (includes icon if specified)
  let link: ResolvableArray<ResolvableLink> = []
  if (config.icon) {
    link.push({ rel: 'icon', href: config.icon })
  }

  useHead(() => ({
    title: title.value,
    meta,
    link,
  }))
}
