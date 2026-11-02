export interface ProjectImage {
  src: string
  alt: string
}
export interface ProjectCase {
  slug: string
  title: string
  category: string
  sector?: string
  request: string
  solution: string
  scope: string[]
  result: string
  cover: ProjectImage
  gallery: ProjectImage[]
}
/** Only documented cases with authorized copy and images belong in this collection. */
export const projects: ProjectCase[] = []
