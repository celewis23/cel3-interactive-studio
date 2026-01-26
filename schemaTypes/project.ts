import {defineField, defineType} from 'sanity'

export const project = defineType({
  name: 'project',
  title: 'Project',
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
    defineField({ name: 'featured', title: 'Featured', type: 'boolean', initialValue: false }),

    defineField({ name: 'client', title: 'Client', type: 'string' }),
    defineField({ name: 'industry', title: 'Industry', type: 'string' }),

    defineField({
      name: 'services',
      title: 'Services',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'service' }] }],
    }),

    defineField({ name: 'summary', title: 'Summary', type: 'text', rows: 3 }),

    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: { hotspot: true },
    }),

    defineField({
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),

    defineField({
      name: 'stack',
      title: 'Tech Stack',
      type: 'array',
      of: [{ type: 'string' }],
    }),

    defineField({
      name: 'timeline',
      title: 'Timeline',
      type: 'string',
      description: 'e.g., 4 weeks, 8 weeks',
    }),

    defineField({
      name: 'results',
      title: 'Results (bullets)',
      type: 'array',
      of: [{ type: 'string' }],
    }),

    defineField({
      name: 'body',
      title: 'Case Study Body',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Full storytelling writeup: problem, approach, solution, outcome.',
    }),
  ],
})

import {defineField, defineType} from 'sanity'

export const project = defineType({
  name: 'project',
  title: 'Project',
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
    defineField({ name: 'featured', title: 'Featured', type: 'boolean', initialValue: false }),

    defineField({ name: 'client', title: 'Client', type: 'string' }),
    defineField({ name: 'industry', title: 'Industry', type: 'string' }),

    defineField({
      name: 'services',
      title: 'Services',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'service' }] }],
    }),

    defineField({ name: 'summary', title: 'Summary', type: 'text', rows: 3 }),

    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: { hotspot: true },
    }),

    defineField({
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),

    defineField({
      name: 'stack',
      title: 'Tech Stack',
      type: 'array',
      of: [{ type: 'string' }],
    }),

    defineField({
      name: 'timeline',
      title: 'Timeline',
      type: 'string',
      description: 'e.g., 4 weeks, 8 weeks',
    }),

    defineField({
      name: 'results',
      title: 'Results (bullets)',
      type: 'array',
      of: [{ type: 'string' }],
    }),

    defineField({
      name: 'body',
      title: 'Case Study Body',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Full storytelling writeup: problem, approach, solution, outcome.',
    }),
  ],
})
