import {defineType, defineField} from 'sanity'

export const dayByDayItinerary = defineType({
  name: 'dayByDayItinerary',
  title: 'Day by Day Itinerary',
  type: 'document',
  fields: [
    defineField({
      name: 'city',
      title: 'City',
      type: 'string',
    }),
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
        hotspot: true,
      },
    }),
    defineField({
      name: 'moreInfo',
      title: 'More Info',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'title', title: 'Title', type: 'string'},
            {name: 'description', title: 'Description', type: 'text'},
          ],
        },
      ],
    }),
    defineField({
      name: 'optionalExperience',
      title: 'Optional Experience',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'image', title: 'Image', type: 'image', options: {hotspot: true}},
            {name: 'title', title: 'Title', type: 'string'},
            {name: 'description', title: 'Description', type: 'text'},
          ],
        },
      ],
    }),
  ],
})
