import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: '16ntz0rf',  // Replace with your actual Sanity Project ID
  dataset: 'production',  // Replace with your actual Sanity Dataset
  useCdn: false,
  apiVersion: '2023-12-01',
});
