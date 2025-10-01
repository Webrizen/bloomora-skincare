import client from "@/lib/sanity";

export async function getAllProducts() {
  const query = `*[_type == "blog"] | order(publishedAt desc) {
     _id,
    title,
    description,
    slug,
    publishedAt,
    keyIngredients,
    benefits,
    coverImage,
    "coverImageUrl": coverImage.asset->url,
    "coverImageMetadata": coverImage.asset->metadata {
      dimensions,
      lqip
    },
    categories
  }`

  return await client.fetch(query)
}

export async function getProductBySlug(slug) {
    const query = `*[_type == "products" && slug.current == $slug][0] {
        _id,
        title,
        description,
        slug,
        mainImage,
        "mainImageUrl": mainImage.asset->url,
        "mainImageMetadata": mainImage.asset->metadata {
            dimensions,
            lqip
        },
        categories[]-> {title, slug},
        keyIngredients,
        benefits,
        body,
        publishedAt,
}`

   return await client.fetch(query, { slug })
}

export async function getAllProductsNavigationInfo(){
     const query = `*[_type == "blog"] | order(publishedAt desc) {
     _id,
    title,
    description,
    slug,
    "coverImageUrl": coverImage.asset->url,
    "coverImageMetadata": coverImage.asset->metadata {
      dimensions,
      lqip
    },
    categories
  }`

  return await client.fetch(query)
}