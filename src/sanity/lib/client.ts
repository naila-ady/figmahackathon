
import { createClient } from "next-sanity";

export const client = createClient({
  projectId:'zu1xko1q', // Should be coming from process.env or env.ts
  dataset:'production',
  apiVersion:'2021-08-31',
  useCdn: true,
});
