import {DocumentTextIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const productsType = defineType({
  name: 'products',
  title: 'Products',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required().min(3).max(100),
    }),
    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.max(300),
    }),
    defineField({
      name: 'price',
      title: 'Price (in USD)',
      type: 'number',
      validation: Rule => Rule.required().min(0),
      default: 134,
    }),
    defineField({
      name: 'quantity',
      title: 'Quantity',
      type: 'number',
      validation: Rule => Rule.required().min(0),
      default: 1,
    }),
    defineField({
      name: 'QuantityLeft',
      title: 'Quantity Left',
      type: 'number',
      validation: Rule => Rule.required().min(0),
      default: 10,
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative text',
          type: 'string',
          validation: Rule => Rule.required().error('Alternative text is important for accessibility.'),
        })
      ]
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [defineArrayMember({type: 'reference', to: [{type: 'category'}]})],
      validation: Rule => Rule.min(1).error('Select at least one category.'),
    }),
    defineField({
      name: 'keyIngredients',
      title: 'Key Ingredients',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'string',
        }),
      ],
      validation: Rule => Rule.min(1).error('Add at least one key ingredient.'),
    }),
    defineField({
      name: 'benefits',
      title: 'Benefits',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'string',
        }),
      ],
      validation: Rule => Rule.min(1).error('Add at least one benefit.'),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
      publishedAt: 'publishedAt',
    },
    prepare({title, media, publishedAt}) {
      return {
        title,
        media,
        subtitle: publishedAt ? `Published: ${new Date(publishedAt).toLocaleDateString()}` : 'Draft',
      }
    },
  },
})
