export type Posts = {
  id: string
  title: string
  tag: string
  companyName: string
  skill: string
  eyecatch: {
    url: string
    height: number
    width: number
  }
  content: string
  createdAt: string
  publishedAt: string
  revisedAt: string
  updatedAt: string
}
