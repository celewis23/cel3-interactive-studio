import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import { deskTool } from 'sanity/desk'

export default defineConfig({
  name: 'default',
  title: 'cel3-interactive-studio',

  projectId: '4kc4ksus',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
