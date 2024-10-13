import {defineType, defineField} from 'sanity'

export const sightseeingHighlights = defineType({
  name: 'sightseeingHighlights',
  title: 'Sightseeing Highlights',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
  ],
})
