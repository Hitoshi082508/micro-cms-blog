import { createClient } from 'microcms-js-sdk'

export const client = createClient({
  serviceDomain: 'hitoshi-portfolio',
  apiKey: process.env.API_KEY,
})
