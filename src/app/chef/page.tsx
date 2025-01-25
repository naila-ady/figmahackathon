import React from 'react';
import { client } from "../../sanity/lib/client";
import { urlFor } from '@/sanity/lib/image';

interface chef {
  _id: number;
  name: string;
  position: string;
  experience: number
  specialty: string;
  image: {
    asset: {
      _ref: string;
    }
  };
  description: string;
  available: boolean;
}

async function fetchProducts(): Promise<chef[]> {
  const query = `*[_type == "chef"] {
     _id,
    name,
    position,
    experience,
    specialty,
    image,
    // image { asset->{_id, url} },
    description,
    available,
    
      }`;


  return client.fetch(query);


}


const ChefsPage = async () => {
  const chef = await fetchProducts();

  console.log(chef)

  return (
    <div>
      <h1 className='text-6xl font-extrabold mx-auto flex justify-center text-[#ff9f0d]'>OUR EXPERT CHEFS</h1>
      <div className='grid grid-cols-3 mx-auto py-4 px-4 gap-7'>
        {chef.map((product) => (
          <div key={product._id} style={{ border: '1px solid #ccc', gap: '4px', padding: '20px', width: '400px', backgroundColor: 'wheat' }}>
            <h2>{product.name}</h2>
            <img
              src={urlFor(product.image).url()}
              alt={product.name}
              style={{ width: '100%', height: 'auto' }}
               />
                      <p>Position:  {product.position}</p>
                        <p>Years Of Experience:  {product.experience}</p>
            <p>Specialty:  {product.specialty}</p>
            <p>{product.description}</p>
                       <p>Available:{product.available} </p>
           


          </div>
        ))}
      </div>
    </div>
  );
};

export default ChefsPage;
