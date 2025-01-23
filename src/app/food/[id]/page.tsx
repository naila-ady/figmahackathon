import React from 'react';
import { client } from "../../../sanity/lib/client";
import { urlFor } from '@/sanity/lib/image';

interface Food {
  _id: string;
  name: string;
  category: string;
  price: number;
   originalPrice: number;
  tags: string[];
   image: {
    asset: {
      _ref: string;
    };
   };
    description:string;
    available:boolean;
}

async function fetchProducts(): Promise<Food[]> {
  const query = `*[_type == "food"] {
    _id,
    name,
    category,
    price,
    originalPrice,
    tags,
    image,
    description,
     available
  }`;
  return client.fetch(query);
}

const FoodPage = async () => {
  const allfood = await fetchProducts();

  return (
    <div>
      <h1 className='text-6xl font-extrabold mx-auto flex justify-center text-[#ff4d97]'>OUR CUISINE</h1>
      <div className='grid grid-cols-1 mx-auto py-4 gap-6 '>
        {allfood.map((item) => (
          <div key={item._id} style={{ border: '1px solid #ccc', padding: '20px', width: '600px' ,
          background:'wheat'}}>
            <h2 className='text-3xl font-semibold'>{item.name}</h2>
            <img
              src={urlFor(item.image).url()}
              alt={item.name}
              style={{ width: '100%', height: 'auto' }}
            />
             <p>{item.category}</p>
            <p>{item.description}</p>
              <p>CurrentPrice:`${item.price}`</p>
             <p>OriginalPrice:`${item.originalPrice}` </p>
              <div>Tags:{Array.isArray (item.tags) && item.tags.length > 0 ? (
              <ul>
                {item.tags.map((tag, i) => (
                  <li key={i}>{tag}</li>
                ))}
                </ul>
            ) : (
              <p>No tags available</p>
            )} </div>
             <p>Description: {item.description} </p>
            <p> {item.available ? "Available":"soldout"} </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodPage;
