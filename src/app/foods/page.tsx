"use client";
import React, { useState, useEffect } from 'react';
import { client } from "../../sanity/lib/client";
import { urlFor } from '@/sanity/lib/image';
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { addtocart } from '../action/actions';
import { Food } from '@/types/foods';
import Image from 'next/image';
import Swal from 'sweetalert2';
import CustomerCare from '@/components/CustomerCare';


// Function to fetch products from Sanity
const fetchProducts = async (): Promise<Food[]> => {
    const query = `*[_type == "food"] {
        _id,
        name,
        category,
        price,
        image,
        slug {current}
    }`;
    return client.fetch(query); // Fetch data from Sanity
};

const FoodListPage = () => {
    const [allFood, setAllFood] = useState<Food[]>([]);

    // Fetch food data on component mount
    useEffect(() => {
        const getFoodData = async () => {
            const foodData = await fetchProducts();
            setAllFood(foodData);
        };
        getFoodData(); // Fetch food data
    }, []);

    // Handle adding an item to the cart
    const handleAddtoCart = (e: React.MouseEvent, food: Food) => {
        e.preventDefault();

        // Show success message
        Swal.fire({
            position: "top-right",
            icon: "success",
            title: `${food.name} added to cart!`,
            showConfirmButton: false,
            timer: 1000,
        });

        // Add the item to cart
        addtocart(food);
    };

    return (
        <div>
            <h1 className="text-6xl font-extrabold mx-auto flex justify-center text-[#ff9f0d]">HOT DEALS</h1>

            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 mx-auto py-4 px-2 gap-4">
                {allFood.map((fooditem) => (
                    <div
                        key={fooditem._id}
                        style={{ border: '1px solid #ccc', padding: '20px' }}
                    >
                        <h2 className="text-3xl font-semibold">{fooditem.name}</h2>

                        <Link href={`/product/${fooditem.slug.current}`}>
                            <Image
                                src={urlFor(fooditem.image).url()}
                                alt={fooditem.name}
                                width={500}
                                height={500}
                                style={{ width: '100%', height: 'auto' }}
                            />
                            <h2 className="text-3xl font-semibold">{fooditem.category}</h2>
                            <h2 className="text-3xl font-semibold">Price: ${fooditem.price}</h2>
                        </Link>

                        <Button
                            className="w-56 h-20 rounded shadow-md hover:shadow-lg bg-gradient-to-r from-amber-300 to-red-600
                            py-2 text-sm font-bold text-white hover:scale-110 transition-transform duration-300
                            ease-in-out"
                            onClick={(e) => handleAddtoCart(e, fooditem)}
                        >
                            ADD TO CART
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    );
};
<CustomerCare />
export default FoodListPage;
