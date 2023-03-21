export interface Icredentials {
  email: string
  token: string
}

export interface Iprofile {
  name: string
  email: string
  token: string
}

export interface IarticleItem {
  source?: {
    id: string
    name: string
  }
  author: string
  title: string
  description: string
  url: string
  urlToImage: string
  publishedAt: string
  content: string
}

export interface InewsAPIResponse {
  articles: IarticleItem[]
}
