import {defineType, defineField} from 'sanity'

export const topTourSummary = defineType({
  name: 'topTourSummary',
  title: 'Top Tour Summary',
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
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true, // allows selecting focus areas
      },
    }),
    defineField({
      name: 'travel',
      title: 'Travel',
      type: 'string',
    }),
    defineField({
      name: 'accommodation',
      title: 'Accommodation',
      type: 'string',
    }),
    defineField({
      name: 'meals',
      title: 'Meals',
      type: 'string',
    }),
    defineField({
      name: 'itinerary',
      title: 'Itinerary',
      type: 'text',
    }),
    defineField({
      name: 'tipsTitle',
      title: 'Tips Title',
      type: 'string',
    }),
    defineField({
      name: 'tipsDescription',
      title: 'Tips Description',
      type: 'text',
    }),
    defineField({
      name: 'tripCode',
      title: 'Trip Code',
      type: 'string',
    }),
  ],
})
