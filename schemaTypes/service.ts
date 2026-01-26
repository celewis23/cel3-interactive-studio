<<<<<<< HEAD
import {defineField, defineType} from 'sanity'

export const service = defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: r => r.required() }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: r => r.required(),
    }),
    defineField({ name: 'short', title: 'Short Description', type: 'string' }),
    defineField({ name: 'description', title: 'Long Description', type: 'text' }),
    defineField({ name: 'order', title: 'Sort Order', type: 'number' }),
  ],
})
=======
import {defineField, defineType} from 'sanity'

export const service = defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: r => r.required() }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: r => r.required(),
    }),
    defineField({ name: 'short', title: 'Short Description', type: 'string' }),
    defineField({ name: 'description', title: 'Long Description', type: 'text' }),
    defineField({ name: 'order', title: 'Sort Order', type: 'number' }),
  ],
})
>>>>>>> f861efa63bbaae48e508cccf27b8f0e7395efc37
