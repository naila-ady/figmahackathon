"use client";
import React, { useEffect, useState } from 'react';
import { Food } from '@/types/foods';
import { getCartItems, removeFromCart, updateCartQuantity } from '../action/actions';
import Swal from 'sweetalert2';
import Image from 'next/image';
import CustomerCare from '../../components/CustomerCare';
import { urlFor } from '@/sanity/lib/image';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

const CartPage = () => {
    const [cartItem, setCartItem] = useState<Food[]>([]);

    // Fetch cart items on mount
    useEffect(() => {
        const fetchCartItems = () => {
            const items = getCartItems(); // Get items from localStorage
            console.log('Fetched items from localStorage:', items); // Debugging log
            setCartItem(items); // Update the state with fetched cart items
        };
        fetchCartItems();
    }, []);

    // Remove cart items
    const handleRemove = (id: string) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You will not be able to recover the item",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: "d35",
            confirmButtonText: "Yes! Remove it",
        }).then((result) => {
            if (result.isConfirmed) {
                removeFromCart(id);
                setCartItem(getCartItems());
                Swal.fire('Your item has been removed!', "", "success");
            }
        });
    }

    // Quantity managing
    const handleQuantityChange = (id: string, quantity: number) => {
        updateCartQuantity(id, quantity);
        setCartItem(getCartItems());
    }

    // Adding the quantity
    const handleIncrement = (id: string) => {
        const food = cartItem.find((item) => item._id === id);
        if (food) {
            handleQuantityChange(id, food.inventory + 1);
        }
    }

    // Subtracting the quantity
    const handleDecrement = (id: string) => {
        const food = cartItem.find((item) => item._id === id);
        if (food && food.inventory > 1) {
            handleQuantityChange(id, food.inventory - 1);
        }
    }

    // Calculating total
    const calculateTotal = () => {
        return cartItem.reduce((total, item) => total + item.price * item.inventory, 0);
    }

    // Handle proceed
    const router = useRouter();
    const handleProceed = () => {
        Swal.fire({
            title: "Proceed to checkout",
            text: "Review your cart",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: "d35",
            confirmButtonText: "Yes! Proceed",
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire("Success", "Your order has been successfully processed", "success");
                setCartItem([]); // Clear cart
            }
            router.push("./checkout")
        });
    }

    return (
        <div className="max-w-[1920px] mx-auto">
            <div className="bg-custom h-[410px] max-w-[1920px]">
                <h1 className="text-white text-center text-4xl pt-40">CART</h1>
                <ul className="text-[16px] text-[#FFFFFF] flex justify-center gap-1 list-none">
                    <Link href="./" className="text-1xl hover:text-[#003152] inline-flex">
                        Home <ChevronRight className="text-[#FF9F0D]" />
                    </Link>
                    <Link
                        href="./cart"
                        className="text-[#FF9F0D] text-1xl hover:text-[#003152]"
                    >
                        Cart
                    </Link>
                </ul>
            </div>
            <div className="max-w-7xl mx-auto px-4 py-8">
                <h1 className="text-6xl font-extrabold text-[#ff9f0d] mb-6">Your Cart</h1>
                <div>
                    {cartItem.length === 0 ? (
                        <p className="text-center text-xl text-[#ff9f0d]">Your cart is empty.</p>
                    ) : (
                        <div className="space-y-6">
                            {cartItem.map((item) => (
                                <div key={item._id} className="flex items-center justify-between border-b pb-6">
                                    <div className="flex items-center space-x-4">

                                        {item.image && (
                                            <Image
                                                src={urlFor(item.image).url()}
                                                alt={item.name}
                                                width={500}
                                                height={500}
                                                className="h-16 w-16 object-cover rounded"
                                            />)}


                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                                            <p className="text-sm text-gray-500">Price: ${item.price}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <div className="flex items-center space-x-2">
                                            <button
                                                onClick={() => handleDecrement(item._id)}
                                                className="bg-gray-200 px-3 py-1 rounded-md hover:bg-gray-300 focus:outline-none"
                                            >
                                                -
                                            </button>
                                            <span className="text-xl">{item.inventory}</span>
                                            <button
                                                onClick={() => handleIncrement(item._id)}
                                                className="bg-gray-200 px-3 py-1 rounded-md hover:bg-gray-300 focus:outline-none"
                                            >
                                                +
                                            </button>
                                        </div>
                                        <button
                                            onClick={() => handleRemove(item._id)}
                                            className="text-red-500 hover:text-red-700 focus:outline-none"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {cartItem.length > 0 && (
                    <div className="mt-8 flex justify-between items-center border-t pt-6">
                        <div className="text-xl font-semibold text-gray-800">
                            Total: ${calculateTotal().toFixed(2)}
                        </div>
                        <button
                            onClick={handleProceed}
                            className="px-6 py-3 bg-[#ff9f0d] text-white rounded-xl hover:bg-gray-500 
                            focus:outline-none"
                        >
                            Proceed to Checkout
                        </button>
                    </div>
                )}
            </div>
<CustomerCare/>
        </div>

    );
};
export default CartPage;

