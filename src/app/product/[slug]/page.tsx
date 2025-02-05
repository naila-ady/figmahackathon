
import { client } from "@/sanity/lib/client";
import { Food } from "@/types/foods";
import groq from 'groq';
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image"; // Adjust based on your file structure



interface FoodPageProps {
  params: Promise<{ slug: string }>;
}

async function  getFood(slug: string): Promise<Food> {
  return client.fetch(
  groq `*[_type == "food" && slug.current == $slug][0]{
     _id,
    name,
    category,
    price,
    originalPrice,
    tags,
    image,
    description,
    available,       
        }`,{slug}
  )
}
export default async function productpage({params}:FoodPageProps){
  const {slug} = await params;
  const food = await getFood(slug)
//   console.log('Slug:', slug);
//  console.log('Food:', food);




return(
  <div className="max-w-7xl mx-auto p-4">
    <div className="grid grid-col-1 md:grid-cols-2 gap-12">
    <div className="aspect-square">
        {food.image &&(
         <Image 
           src={urlFor(food.image).url()}
           alt={"productimage"}
           width={500}
           height={500}
           className="rounded-lg shadow-md"/>
        )
        } 
      </div>
      <div className="flex flex-col gap-8">
        <h1 className=" text-4xl font-bold">{food.name}</h1>
        <p className=" text-2xl font-medium">{food.category}</p>
        <p className=" text-2xl font-medium">DiscountePrice:${food.price}</p>
        <p className=" text-2xl font-medium">Original Price:${food.originalPrice}</p>
        <p className=" text-2xl font-medium">Details:{food.description}</p>
         <p className=" text-2xl font-medium">Quality:{food.tags}</p>
         <p className=" text-2xl font-medium"> {food.available ? "Available":"soldout"}</p>
 


      </div>
       
    </div>
  </div>
)
}   
 
