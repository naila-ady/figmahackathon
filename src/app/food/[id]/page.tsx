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
        {allfood.map((selectedfood) => (
          <div key={selectedfood._id} style={{ border: '1px solid #ccc', padding: '20px', width: '600px' ,
          background:'wheat'}}>
            <h2 className='text-3xl font-semibold'>{selectedfood.name}</h2>
            <img
              src={urlFor(selectedfood.image).url()}
              alt={selectedfood.name}
              style={{ width: '100%', height: 'auto' }}
            />
             <p>{selectedfood.category}</p>
            <p>{selectedfood.description}</p>
              <p>CurrentPrice:`${selectedfood.price}`</p>
             <p>OriginalPrice:`${selectedfood.originalPrice}` </p>
              <div>Tags:{Array.isArray (selectedfood.tags) && selectedfood.tags.length > 0 ? (
              <ul>
                {selectedfood.tags.map((tag, i) => (
                  <li key={i}>{tag}</li>
                ))}
                </ul>
            ) : (
              <p>No tags available</p>
            )} </div>
             <p>Description: {selectedfood.description} </p>
            <p> {selectedfood.available ? "Available":"soldout"} </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodPage;
