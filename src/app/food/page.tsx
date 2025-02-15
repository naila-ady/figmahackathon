

"use client";
import React, { useState, useEffect } from 'react';
import { client } from "../../sanity/lib/client";
import { urlFor } from '@/sanity/lib/image';
import { Button } from "@/components/ui/button";
import { Heart, Share2, LayoutGrid } from "lucide-react";
import Link from 'next/link';

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
  description: string;
  available: boolean;
  slug:{
    _type:"slug";
    current:string;
};
}

const fetchProducts = async (): Promise<Food[]> => {
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
};


const FoodPage = () => {
  const [allFood, setAllFood] = useState<Food[]>([]);  // State to store all food items
  const [selectedFood, setSelectedFood] = useState<Food | null>(null);  // State for selected food item

  useEffect(() => {
    const getFoodData = async () => {
      const foodData = await fetchProducts();
      setAllFood(foodData); // Set the food data after fetching
    };
    
    getFoodData(); // Fetch data on component mount
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  const handleFoodClick = (food: Food) => {
    setSelectedFood(food); // Show food details on click
  };

  return (


    <div>

<h1 className='text-6xl font-extrabold mx-auto flex justify-center  text-[#ff9f0d]'>HOT DEALS</h1>
      {selectedFood ? (
        // If a food item is selected, show its details
        <div  key={selectedFood._id} style={{ border: '1px solid #ccc',  padding: '20px',display:"flex",
         flexDirection:"column", justifyContent:"center" , alignItems:"center"}}>
         
          <h2 className='text-3xl font-semibold '>{selectedFood.name}</h2>
          <img
            src={urlFor(selectedFood.image).url()}
            alt={selectedFood.name}
            style={{ width: '60%', height: 'auto'}}
          />
          <p className='text-xl font-medium'>{selectedFood.category}</p>
        
          <p className='text-xl font-medium'>Current Price: ${selectedFood.price}</p>
                   <p className='text-xl font-medium'>OriginalPrice:`${selectedFood.originalPrice}` </p>
              <div className='text-xl font-medium'>Tags:{Array.isArray (selectedFood.tags) && selectedFood.tags.length > 0 ? (
              <ul className='text-xl font-medium'>
                {selectedFood.tags.map((tag, i) => (
                  <li key={i}>{tag}</li>
                ))}
                </ul>
            ) : (
              <p>No tags available</p>
            )} </div>
             <p className='text-xl font-medium'>Description: {selectedFood.description} </p>
            <p className='text-xl font-medium'> {selectedFood.available ? "Available":"soldout"} </p>
            <Link href={"./"}>
            <Button className="w-52 rounded bg-black py-2 text-sm font-medium text-white hover:bg-black/90">
             Add to cart
            </Button>
            </Link>
 
            

          <div className="mt-2 flex items-center justify-center gap-4 text-sm text-gray-700">
            <button className="flex items-center gap-1 text-[#ff9f0d] hover:text-black">
              <Share2 className="h-6 w-6" />
              Share
            </button>
            <button className="flex items-center gap-1 text-[#ff9f0d] hover:text-black">
              <LayoutGrid className="h-6 w-6" />
              Compare
            </button>
            <button className="flex items-center gap-1 text-[#ff9f0d] hover:text-black">
              <Heart className="h-6 w-6" />
              Like
            </button>
          </div>
        </div>
      ) : (
        // Show a list of food items in grid, click on each to show details
        <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 mx-auto py-4 px-2 gap-4'>
          {allFood.map((item) => (
            <div
              key={item._id}
              style={{ border: '1px solid #ccc', padding: '20px', background: 'wheat' }}
              onClick={() => handleFoodClick(item)} // Handle click to show selected food details
            >
              
              <h2 className='text-3xl font-semibold'>{item.name}</h2>
              <img
                src={urlFor(item.image).url()}
                alt={item.name}
                style={{ width: '100%', height: 'auto' }}
              />
              <p>{item.category}</p>
              
              <Button className="w-full rounded bg-black py-2 text-sm font-medium text-white hover:bg-black/90">
            SHOW DETAILS
          </Button>
 
            </div>
          ))}
        </div>
      )}
    </div>
    
  );
};

export default FoodPage;

