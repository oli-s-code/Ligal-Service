import { client } from './sanity'

// Alle Artikel abrufen
export async function getAllArticles() {
  const query = `*[_type == "article"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    content,
    "category": category->slug.current,
    author,
    "date": publishedAt,
    readTime,
    image,
    publishedAt
  }`
  
  return await client.fetch(query)
}

// Einzelnen Artikel nach ID abrufen
export async function getArticleById(id: string) {
  const query = `*[_type == "article" && _id == $id][0] {
    _id,
    title,
    slug,
    excerpt,
    content,
    "category": category->slug.current,
    author,
    "date": publishedAt,
    readTime,
    image,
    publishedAt
  }`
  
  return await client.fetch(query, { id })
}

// Alle Kategorien abrufen
export async function getAllCategories() {
  const query = `*[_type == "category"] {
    _id,
    name,
    slug
  }`
  
  return await client.fetch(query)
}

// Artikel nach Kategorie abrufen
export async function getArticlesByCategory(categorySlug: string) {
  const query = `*[_type == "article" && category->slug.current == $categorySlug] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    content,
    "category": category->slug.current,
    author,
    "date": publishedAt,
    readTime,
    image,
    publishedAt
  }`
  
  return await client.fetch(query, { categorySlug })
}
