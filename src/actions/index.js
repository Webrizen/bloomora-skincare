import client from "@/lib/sanity";

export async function getAllProducts() {
  const query = `*[_type == "products"] | order(publishedAt desc) {
     _id,
    title,
    description,
    slug,
    price,
    publishedAt,
    quantity,
    quantityLeft,
    keyIngredients,
    benefits,
    mainImage,
    "coverImageUrl": mainImage.asset->url,
    "coverImageMetadata": mainImage.asset->metadata {
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
        price,
        quantity,
    quantityLeft,
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

export async function getAllProductsNavigationInfo() {
  const query = `*[_type == "products"] | order(publishedAt desc) {
     _id,
    title,
    description,
    slug,
    "coverImageUrl": mainImage.asset->url,
    "coverImageMetadata": mainImage.asset->metadata {
      dimensions,
      lqip
    },
    categories
  }`

  return await client.fetch(query)
}