
import { createClient } from "next-sanity";
import { projectId,dataset,apiVersion,token } from "../env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn:true,
});

// // // client.ts
// import { createClient } from "next-sanity";

// // Environment variables setup
// export const apiVersion =
//   process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-23';

// export const dataset = assertValue(
//   process.env.NEXT_PUBLIC_SANITY_DATASET,
//   'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
// );

// export const projectId = assertValue(
//   process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
//   'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
// );

// // Sanity client creation
// export const client = createClient({
//   projectId:'zu1xko1q',
//   dataset:"production",
//   apiVersion:"2025-01-23",
//   useCdn: true,
// });

// function assertValue<T>(v: T | undefined, errorMessage: string): T {
//   if (v === undefined) {
//     throw new Error(errorMessage);
//   }
//   return v;
// }
