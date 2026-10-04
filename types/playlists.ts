export type PlaylistLinkType =
  | 'apple'
  | 'spotify'
  | 'deezer'
  | 'youtube'
  | 'yandex'
  | 'soundcloud'

export interface PlaylistLink {
  url: string
  type: PlaylistLinkType
}

export interface Playlist {
  slug: string
  title: string
  description: string
  author: string
  image: string
  links: PlaylistLink[]
}
