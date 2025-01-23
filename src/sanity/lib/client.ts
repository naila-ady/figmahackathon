
import { createClient } from "next-sanity";

export const client = createClient({
  projectId:'zu1xko1q',
  dataset:'production',
  apiVersion:'2024-01-01',
  useCdn: true,
});
