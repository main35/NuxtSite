export interface PlaylistLink {
  title: string
  url: string
  type: 'apple' | 'spotify' | 'deezer' | 'youtube'
}

export interface Playlist {
  slug: string
  title: string
  description: string
  author: string
  image: string
  links: PlaylistLink[]
}
