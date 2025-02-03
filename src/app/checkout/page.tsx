
'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ChevronRight, } from 'lucide-react';
import { Food } from '@/types/foods';
import { getCartItems } from '../action/actions';
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import CustomerCare from '@/components/CustomerCare';
import { Button } from '@/components/ui/button';
import Swal from 'sweetalert2';
import { client } from '@/sanity/lib/client';



const Checkoutpage = () => {
  // State for cart items, discount, and form values
  const [cartItems, setCartItems] = useState<Food[]>([]);
  const [discount, setDiscount] = useState<number>(0);
  const [formValue, setFormvalue] = useState({
    firstname: "",
    lastname: '',
    phone: '',
    email: '',
    address: '',
    streetNumber: '',
    city: '',
    country: '',
    total:'',
    postalzipcode: '',
    shippingMethod: '',
  });

  // State for form validation errors
  const [formErrors, setFormErrors] = useState({
    firstname: false,
    lastname: false,
    phone: false,
    email: false,
    address: false,
    streetNumber: false,
    city: false,
    country: false,
    total:false,
    postalzipcode: false,
    shippingMethod: false,  
  });

  // Fetch cart items and discount from localStorage
  useEffect(() => {
    setCartItems(getCartItems());
    const appliedDiscount = localStorage.getItem('discount');
    if (appliedDiscount) {
      setDiscount(Number(appliedDiscount)); // Correctly set the discount value from localStorage
    }
  }, []);

  // Calculate subtotal from cart items
  const subTotal = cartItems.reduce(
    (total, item) => total + item.price * item.inventory,0
    
  );

  // Handle input change and update form values
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormvalue({
      ...formValue,
      [e.target.id]: e.target.value,
    });
  };

  // Validate form fields
  const formValidate = () => {
    const errors = {
      firstname: !formValue.firstname,
      lastname: !formValue.lastname,
      phone: !formValue.phone,
      email: !formValue.email,
      address: !formValue.address,
      streetNumber: !formValue.streetNumber,
      city: !formValue.city,
      country: !formValue.country,
      total:!formValue.total,
      postalzipcode: !formValue.postalzipcode,
      shippingMethod: !formValue.shippingMethod,
    };

    setFormErrors(errors);
    return Object.values(errors).every((error) => !error);
  };

  // Handle order placement will create all orders over here
  const handlePlaceOrder = async () => {
    Swal.fire({
      title: "Processing your order",
      text: "Please wait a moment",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: "d35",
      confirmButtonText: "Yes! Proceed",
    }).then((result) => {
      if (result.isConfirmed) {
        if (formValidate()) {
          // Remove discount from localStorage if the form is valid
          localStorage.removeItem('appliedDiscount');
          Swal.fire("Success", "Your order has been successfully processed", "success");
        } else {
          Swal.fire(
            "Error",
            "Please fill in the boxes before proceeding",
            "error"
          );
        }
      };
    });

    //will create all orders over here
    const orderData = {
      _type: 'order',
      firstname: formValue.firstname,
      lastname: formValue.lastname,
      phone: formValue.phone,
      email: formValue.email,
      address: formValue.address,
      streetNumber: formValue.streetNumber,
      city: formValue.city,
      country: formValue.country,
      total :subTotal,
      postalzipcode: formValue.postalzipcode,
      cartitems: cartItems.map(item => ({
        _type: 'reference',
        _ref: item._id
      })),
      discount: discount,
      orderDate: new Date().toISOString()
    };
    console.log('Order data:', orderData);

    // try to detect error
    try{
      await client.create(orderData)
      localStorage.removeItem('')
    }catch(error){
      console.error('error',error)
    }


   

  }





  return (
    <div className="max-w-[1920px] mx-auto">
      {/* Header */}
      <div className="bg-custom h-[410px] max-w-[1920px]">
        <h1 className="text-white text-center text-4xl pt-40">CheckOut</h1>
        <ul className="text-[16px] text-[#FFFFFF] flex justify-center gap-1 list-none">
          <Link href="./cart" className="text-1xl hover:text-[#003152] inline-flex">
            Cart <ChevronRight className="text-[#FF9F0D]" />
          </Link>
          <Link
            href="./checkout"
            className="text-[#FF9F0D] text-1xl hover:text-[#003152]"
          >
            Check-Out
          </Link>
        </ul>
      </div>




      <div className="min-h-screen py-8 ">
        {/* Order Summary */}
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold text-[#ff9f0d] mb-6">Order Summary</h2>

          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div key={item._id} className="flex items-center border-b border-[#ff9f0d] py-4">
                <div className="w-16 h-16 flex-shrink-0">
                  {item.image && (
                    <Image
                      src={urlFor(item.image).url()}
                      alt={item.name}
                      width={80}
                      height={80}
                      className="object-cover rounded-md"
                    />
                  )}
                </div>
                <div className="ml-4 flex-1">
                  <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
                  <p className="text-sm text-gray-600">Quantity: {item.available}</p>
                  <p className="text-sm text-gray-600">
                    ${item.price} x {item.inventory}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600">No items in your cart.</p>
          )}

          {cartItems.length > 0 && (
            <div className="mt-6">
              <div className="flex justify-between text-lg font-semibold text-gray-800 mb-4 border-b border-[#ff9f0d]">
                <span>SubTotal:</span>
                <span>${subTotal.toFixed(2)}</span>
              </div>

              <div className="flex justify-between text-lg font-semibold text-gray-800 mb-4 border-b border-[#ff9f0d]">
                <span>Discount:</span>
                <span>-${discount.toFixed(2)}</span>
              </div>

              <div className="flex justify-between text-xl font-semibold text-gray-900  pt-4 border-b border-[#ff9f0d]">
                <span>Total:</span>
                <span>${(subTotal - discount).toFixed(2)}</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Billing Details Section */}

      <div className='max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-md'>
        <div className="grid gap-8 lg:grid-cols-2 sm:grid-cols-1">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-[#ff9f0d]">Billing details</h2>

            {/* First Name and Last Name */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label className="text-gray-700 font-semibold">First Name</label>
                <Input
                  type="text"
                  id="firstname"
                  placeholder="Enter your name"
                  value={formValue.firstname}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-[#ff9f0d] rounded-md "
                />
                {formErrors.firstname && <p className="text-red-500">First name is required</p>}
              </div>
              {/* Last Name */}
              <div className="space-y-2">
                <label className="text-gray-700 font-semibold">Last Name</label>
                <Input
                  type="text"
                  id="lastname"
                  placeholder="Enter your last name"
                  value={formValue.lastname}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-[#ff9f0d] rounded-md "
                />
                {formErrors.lastname && <p className="text-red-500">Last name is required</p>}
              </div>
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <label className="text-gray-700 font-semibold ">Phone</label>
              <Input
                type="text"
                id="phone"
                placeholder="Enter your phone number"
                value={formValue.phone}
                onChange={handleInputChange}
                className="w-full p-2 border border-[#ff9f0d] rounded-md "
              />
              {formErrors.phone && <p className="text-red-500">Phone number is required</p>}
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="text-gray-700 font-semibold">Email</label>
              <Input
                type="text"
                id="email"
                placeholder="Enter your Email"
                value={formValue.email}
                onChange={handleInputChange}
                className="w-full p-2 border border-[#ff9f0d] rounded-md "
              />
              {formErrors.email && <p className="text-red-500">Email is required</p>}
            </div>

            {/* Address */}
            <div className="space-y-2">
              <label className="text-gray-700 font-semibold">Address</label>
              <Input
                type="text"
                id="address"
                placeholder="Enter your address"
                value={formValue.address}
                onChange={handleInputChange}
                className="w-full p-2 border border-[#ff9f0d] rounded-md "
              />
              {formErrors.address && <p className="text-red-500">Address is required</p>}
            </div>

            {/* Street Number */}
            <div className="space-y-2">
              <label className="text-gray-700 font-semibold">Street Number</label>
              <Input
                type="text"
                id="streetNumber"
                placeholder="Enter your street number"
                value={formValue.streetNumber}
                onChange={handleInputChange}
                className="w-full p-2 border border-[#ff9f0d] rounded-md "
              />
              {formErrors.streetNumber && <p className="text-red-500">Street Number is required</p>}
            </div>



            {/* City */}
            <div className="space-y-2">
              <label className="text-gray-700 font-semibold">City</label>
              <Input
                type="text"
                id="city"
                placeholder="Enter your city"
                value={formValue.city}
                onChange={handleInputChange}
                className="w-full p-2 border border-[#ff9f0d] rounded-md "
              />
              {formErrors.city && <p className="text-red-500">City is required</p>}
            </div>

            {/* country */}
            <div className="space-y-2">
              <label className="text-gray-700 font-semibold">Country</label>
              <Input
                type="text"
                id="country"
                placeholder="Enter your country"
                value={formValue.country}
                onChange={handleInputChange}
                className="w-full p-2 border border-[#ff9f0d] rounded-md "
              />
              {formErrors.country && <p className="text-red-500">Country is required</p>}
            </div>


            {/* Postal / Zip Code */}
            <div className="space-y-2">
              <label className="text-gray-700 font-semibold">Postal/Zip Code</label>
              <Input
                type="text"
                id="postalzipcode"
                placeholder="Enter your postal code"
                value={formValue.postalzipcode}
                onChange={handleInputChange}
                className="w-full p-2 border border-[#ff9f0d] rounded-md "
              />
              {formErrors.postalzipcode && <p className="text-red-500">Postal code is required</p>}
            </div>
           

        {/*shipping method */}
        <div className="space-y-2">
              <label className="text-gray-700 font-semibold">Shipping Method</label>
              <Input
                type="text"
                id="shippingMethod"
                placeholder="Enter your Shipping Method"
                value={formValue.shippingMethod}
                onChange={handleInputChange}
                className="w-full p-2 border border-[#ff9f0d] rounded-md "
              />
              {formErrors.shippingMethod && <p className="text-red-500">Shipping Method is required</p>}
            </div>
           

            <Button className="w-full sm:w-56 h-16 rounded shadow-md hover:shadow-lg 
      bg-gradient-to-r from-amber-300 to-red-600  text-sm font-bold text-white hover:scale-110
       transition-transform duration-300 ease-in-out py-8"
              onClick={handlePlaceOrder}>
              Place Order
            </Button>
          </div>
        </div>
      </div>
      <CustomerCare />
    </div>


  )
}
export default Checkoutpage


