export interface CursorAsset {
  type: string
  path: string
}

export interface Cursor {
  name: string
  version: string
  downloadURL: string
  assets: CursorAsset[]
}
