

"use client";
import React, { useState, useEffect } from 'react';
import { client } from "../sanity/lib/client";
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
  const [cartItems, setCartItems] = useState<{ [key: string]: Food & { quantity: number } }>({}); // State to manage cart

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

  const addToCart = (food: Food) => {
    setCartItems((prevCart) => {
      const updatedCart = { ...prevCart };
      if (updatedCart[food._id]) {
        // If the food item is already in the cart, increase the quantity
        updatedCart[food._id].quantity += 1;
      } else {
        // If not, add it to the cart
        updatedCart[food._id] = { ...food, quantity: 1 };
      }
      return updatedCart;
    });
  };

  return (
    <div>
      <h1 className='text-6xl font-extrabold mx-auto flex justify-center text-[#ff4d97]'>
        OUR CUISINE
      </h1>

      {selectedFood ? (
        // If a food item is selected, show its details
        <div style={{ border: '1px solid #ccc', padding: '20px', display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <h2 className='text-3xl font-semibold'>{selectedFood.name}</h2>
          <img
            src={urlFor(selectedFood.image).url()}
            alt={selectedFood.name}
            style={{ width: '60%', height: 'auto', display: "flex", justifyContent: "center" }}
          />
          <p>{selectedFood.category}</p>
          <p>Current Price: Rs. {selectedFood.price}</p>
          <p>Original Price: Rs. {selectedFood.originalPrice}</p>

          {/* Tags */}
          <div>
            Tags: {Array.isArray(selectedFood.tags) && selectedFood.tags.length > 0 ? (
              <ul>
                {selectedFood.tags.map((tag, i) => (
                  <li key={i}>{tag}</li>
                ))}
              </ul>
            ) : (
              <p>No tags available</p>
            )}
          </div>

          {/* Description */}
          <p>Description: {selectedFood.description}</p>

          {/* Availability */}
          <p>{selectedFood.available ? "Available" : "Sold Out"}</p>

          {/* Add to Cart Button */}
          <Button
            onClick={() => addToCart(selectedFood)}  // Fixed issue by passing the selectedFood
            className="w-full rounded bg-black py-2 text-sm font-medium text-white hover:bg-black/90"
          >
            Add to cart
          </Button>

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
              <Button
                onClick={() => addToCart(item)}  // Add the clicked item to cart
                className="w-full rounded bg-black py-2 text-sm font-medium text-white hover:bg-black/90"
              >
                Add to Cart
              </Button>
            </div>
          ))}
        </div>
      )}

      {/* Cart Summary */}
      <div style={{ marginTop: '20px' }}>
        <h2 className="text-2xl font-semibold">Cart Summary</h2>
        <ul>
          {Object.values(cartItems).map((item) => (
            <li key={item._id} className="py-2">
              {item.name} - Rs. {item.price} x {item.quantity}
            </li>
          ))}
        </ul>
        <div>
          <strong>Total: Rs. {Object.values(cartItems).reduce((total, item) => total + item.price * item.quantity, 0)}</strong>
        </div>
      </div>
    </div>
  );
};

export default FoodPage;
