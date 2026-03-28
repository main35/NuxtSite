import type { Technology } from ':/technology'

export interface Project {
  name: string
  description: string
  link: string
  preview?: string
  technologies: Technology[]
}
