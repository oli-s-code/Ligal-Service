import { defineType, defineField } from 'sanity'

export const categorySchema = defineType({
  name: 'category',
  title: 'Kategorie',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'object',
      fields: [
        {
          name: 'de',
          title: 'Deutsch',
          type: 'string',
          validation: Rule => Rule.required()
        },
        {
          name: 'ru',
          title: 'Russisch',
          type: 'string',
          validation: Rule => Rule.required()
        }
      ],
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name.de',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    })
  ]
})
