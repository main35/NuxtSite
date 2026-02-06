import { defineNuxtPlugin, useRouter } from '#app'
import type { RouteLocation, Router } from '#vue-router'

export default defineNuxtPlugin((): void => {
  const router: Router = useRouter()

  router.afterEach((to: RouteLocation): void => {
    const baseUrl: string = 'https://a35hie.me'
    const canonicalLink: HTMLLinkElement | null = document.querySelector(
      "link[rel='canonical']"
    )

    const fullUrl: string = baseUrl + to.fullPath

    if (canonicalLink) {
      canonicalLink.setAttribute('href', fullUrl)
    } else {
      const link: HTMLLinkElement = document.createElement('link')
      link.setAttribute('rel', 'canonical')
      link.setAttribute('href', fullUrl)
      document.head.appendChild(link)
    }
  })
})
