import { PortableTextBlock } from '@portabletext/react'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'

export interface LocalizedString {
  de: string
  ru: string
}

export interface LocalizedPortableText {
  de: PortableTextBlock[]
  ru: PortableTextBlock[]
}

export interface SanityArticle {
  _id: string
  title: LocalizedString
  slug: {
    current: string
  }
  excerpt: LocalizedString
  content: LocalizedPortableText
  category: string
  author: string
  date: string
  readTime: string
  image: SanityImageSource
  publishedAt: string
}

export interface SanityCategory {
  _id: string
  name: LocalizedString
  slug: {
    current: string
  }
}

// Legacy Article Type (für Kompatibilität mit bestehendem Code)
export interface Article {
  id: string
  title: LocalizedString
  excerpt: LocalizedString
  content: LocalizedString
  category: 'business' | 'family' | 'property' | 'tax' | 'international'
  author: string
  date: string
  readTime: string
  image: string
}
