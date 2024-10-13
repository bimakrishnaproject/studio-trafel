import {defineType, defineField} from 'sanity'

export const faq = defineType({
  name: 'faq',
  title: 'FAQ',
  type: 'document',
  fields: [
    defineField({
      name: 'ask',
      title: 'Ask',
      type: 'string',
    }),
    defineField({
      name: 'answer',
      title: 'Answer',
      type: 'text',
    }),
  ],
})
