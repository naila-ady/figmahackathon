// import { Food } from "@/types/foods"
  

// // creating addtocart function 

// export const addtocart = (food: Food) => {
//     const Cart: Food[] = JSON.parse(localStorage.getItem('cart') || '[]')

//     const existingfoodIndex = Cart.findIndex(item => item._id === food._id)

//     if (existingfoodIndex > -1) {
//         Cart[existingfoodIndex].inventory += 1

//     }
//     else {
//         Cart.push({
//             ...food, inventory: 1
//         })
//     }
//     localStorage.setItem('Cart', JSON.stringify(Cart))
// }


// //removing items from cart

// export const RemoveFromCart = (foodId: string) => {
//     let cart: Food[] = JSON.parse(localStorage.getItem('cart') || '[]')
//     cart = cart.filter(Item => Item._id !== foodId)
//     localStorage.setItem('cart', JSON.stringify(cart))
// }

// // updating product in cart
// export const Updatecartquantity = (foodId: string, quantity: number) => {
//     const cart: Food[] = JSON.parse(localStorage.getItem('cart') || '[]')
//     const foodIndex = cart.findIndex(item => item._id === foodId)

//     if (foodIndex >-1) {
//         cart[foodIndex].inventory = quantity
//     }
// }

// export const getCartItems = (): Food[] => {
//     return JSON.parse(localStorage.getItem('cart') || '[]')

// }
import { Food } from "@/types/foods";

// Function to add item to cart
export const addtocart = (food: Food) => {
    const cart: Food[] = JSON.parse(localStorage.getItem('cart') || '[]');

    const existingFoodIndex = cart.findIndex(item => item._id === food._id);

    if (existingFoodIndex > -1) {
        cart[existingFoodIndex].inventory += 1; // Increment inventory if item exists
    } else {
        cart.push({ ...food, inventory: 1 }); // Add new item with inventory set to 1
    }

    localStorage.setItem('cart', JSON.stringify(cart)); // Save to localStorage
};

// Function to remove item from cart
export const removeFromCart = (foodId: string) => {
    let cart: Food[] = JSON.parse(localStorage.getItem('cart') || '[]');
    cart = cart.filter(item => item._id !== foodId); // Filter out item by foodId
    localStorage.setItem('cart', JSON.stringify(cart)); // Save updated cart to localStorage
};

// Function to update the quantity of an item in the cart
export const updateCartQuantity = (foodId: string, quantity: number) => {
    const cart: Food[] = JSON.parse(localStorage.getItem('cart') || '[]');
    const foodIndex = cart.findIndex(item => item._id === foodId);

    if (foodIndex > -1) {
        cart[foodIndex].inventory = quantity; // Update inventory for the item
    }

    localStorage.setItem('cart', JSON.stringify(cart)); // Save updated cart
};

// Function to get all cart items from localStorage
export const getCartItems = (): Food[] => {
    return JSON.parse(localStorage.getItem('cart') || '[]');
};
