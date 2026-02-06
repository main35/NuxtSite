import type SocialLink from ':/SocialLink'

export const SocialMediaLinks: SocialLink[] = [
  {
    name: 'Discord',
    url: 'https://discord.com/users/1118629361675939860',
    icon: 'ic:baseline-discord',
  },
  {
    name: 'Snapchat',
    url: 'https://snapchat.com/t/BzWqgpTE',
    icon: 'mingcute:snapchat-fill',
  },
  {
    name: 'Reddit',
    url: 'https://www.reddit.com/user/asboy2035/',
    icon: 'fa6-brands:reddit-alien',
  },
  {
    name: 'BlueSky',
    url: 'https://bsky.app/profile/asboy2035.com',
    icon: 'ri:bluesky-fill',
  },
  {
    name: 'Email',
    url: 'mailto:ash@a35.dev',
    icon: 'solar:plain-bold',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/a35hie',
    icon: 'mingcute:github-fill',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/a35hie/',
    icon: 'ri:instagram-fill',
  },
  {
    name: 'Ko-Fi',
    url: 'https://ko-fi.com/a35hie',
    icon: 'cib:ko-fi',
  },
]

export const MoreLinks: SocialLink[] = [
  {
    name: 'Warp',
    url: 'https://app.warp.dev/referral/KVWRZZ',
    icon: 'mingcute:terminal-fill',
  },
  {
    name: 'FaH',
    url: 'https://stats.foldingathome.org/donor/id/732018511',
    icon: 'material-symbols:network-node',
  },
  {
    name: 'Last.fm',
    url: 'https://www.last.fm/user/a35hie',
    icon: 'ph:lastfm-logo-bold',
  },
]

export const SocialLinks: SocialLink[] = [ ...SocialMediaLinks, ...MoreLinks ]
