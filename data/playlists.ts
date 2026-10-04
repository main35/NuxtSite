import type { Playlist } from ':/playlists'

export const playlists: Playlist[] = [
  {
    slug: 'topsongs',
    title: "Top Songs '25",
    description: 'My fav songs of 2025!',
    author: 'ash',
    image: 'https://i.ibb.co/rf128hpZ/Top-Songs-25.jpg',
    links: [
      {
        url: 'https://music.apple.com/us/playlist/top-songs/pl.u-leyl2WASMo634Ym',
        type: 'apple',
      },
      {
        url: 'https://open.spotify.com/playlist/7aOCrHrA8N7CKj8jhT2o9F',
        type: 'spotify',
      },
      {
        url: 'https://www.deezer.com/en/playlist/13650302661',
        type: 'deezer',
      },
      {
        url: 'https://music.youtube.com/playlist?list=PLFsL-Utna_XG8xPD5T1vD0hjaesh-cKiw',
        type: 'youtube',
      },
      {
        url: 'https://music.yandex.kz/playlists/594faba3-6448-83e2-9bfb-3ac244cde088?utm_source=web&utm_medium=copy_link',
        type: 'yandex',
      },
    ],
  },
  {
    slug: 'ash26',
    title: "ash '26 ૮꒰ ˶> ༝ < ྀི˶꒱ა",
    description: 'My fav songs of 2026!',
    author: 'ash',
    image: 'https://i.ibb.co/NgPNtZjC/ash-2026.jpg',
    links: [
      {
        url: 'https://music.yandex.ru/playlists/941073dd-c51a-c36b-987a-caea13fd0538?utm_source=desktop&utm_medium=copy_link',
        type: 'yandex',
      },
    ],
  },
]
