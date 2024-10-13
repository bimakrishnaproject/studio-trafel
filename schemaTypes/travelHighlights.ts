import {defineType, defineField} from 'sanity'

export const travelHighlights = defineType({
  name: 'travelHighlights',
  title: 'Travel Highlights',
  type: 'document',
  fields: [
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
  ],
})
