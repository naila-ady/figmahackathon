

"use client";
import React, { useState, useEffect } from 'react';
import { client } from "../../sanity/lib/client";
import { urlFor } from '@/sanity/lib/image';
import { Button } from "@/components/ui/button";
import { Heart, Share2, LayoutGrid } from "lucide-react";

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

      
      {selectedFood ? (
        // If a food item is selected, show its details
        <div style={{ border: '1px solid #ccc',  padding: '20px',display:"flex", flexDirection:"column", justifyContent:"center" }}>
          <h2 className='text-3xl font-semibold'>{selectedFood.name}</h2>
          <img
            src={urlFor(selectedFood.image).url()}
            alt={selectedFood.name}
            style={{ width: '60%', height: 'auto',  display:"flex" , justifyContent:"center" }}
          />
          <p>{selectedFood.category}</p>
        
          <p>Current Price: ${selectedFood.price}</p>
          <p>CurrentPrice:`${selectedFood.price}`</p>
             <p>OriginalPrice:`${selectedFood.originalPrice}` </p>
              <div>Tags:{Array.isArray (selectedFood.tags) && selectedFood.tags.length > 0 ? (
              <ul>
                {selectedFood.tags.map((tag, i) => (
                  <li key={i}>{tag}</li>
                ))}
                </ul>
            ) : (
              <p>No tags available</p>
            )} </div>
             <p>Description: {selectedFood.description} </p>
            <p> {selectedFood.available ? "Available":"soldout"} </p>

          


          <div className="mt-2 flex items-center justify-center gap-4 text-sm text-gray-700">
            <button className="flex items-center gap-1 hover:text-black">
              <Share2 className="h-4 w-4" />
              Share
            </button>
            <button className="flex items-center gap-1 hover:text-black">
              <LayoutGrid className="h-4 w-4" />
              Compare
            </button>
            <button className="flex items-center gap-1 hover:text-black">
              <Heart className="h-4 w-4" />
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


