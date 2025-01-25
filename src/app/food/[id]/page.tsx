
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { client } from "../../../sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
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

const fetchFoodBySlug = async (slug: string): Promise<Food | null> => {
  const query = `*[_type == "food" && slug.current == $slug][0] {
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
  
  const food = await client.fetch(query, { slug });
  return food || null; // Return the food item or null if not found
};

const FoodPage = () => {
  const router = useRouter();
  const { slug } = router.query; // Get the dynamic slug from the URL
  const [food, setFood] = useState<Food | null>(null);

  useEffect(() => {
    if (slug) {
      const getFoodData = async () => {
        const foodData = await fetchFoodBySlug(slug as string);
        setFood(foodData);
      };
      getFoodData();
    }
  }, [slug]); // Fetch food data when the slug changes

  if (!food) {
    return <div>Loading...</div>; // Show a loading state while fetching
  }

  return (
    <div>
      <h1 className="text-6xl font-extrabold mx-auto flex justify-center text-[#ff9f0d]">HOT DEALS</h1>
      <div key={food._id} style={{ border: '1px solid #ccc', padding: '20px', display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <h2 className="text-3xl font-semibold">{food.name}</h2>
        <img src={urlFor(food.image).url()} alt={food.name} style={{ width: '60%', height: 'auto' }} />
        <p>{food.category}</p>
        <p>Current Price: ${food.price}</p>
        <p>Original Price: ${food.originalPrice}</p>
        <div>
          Tags: {Array.isArray(food.tags) && food.tags.length > 0 ? (
            <ul>
              {food.tags.map((tag, i) => (
                <li key={i}>{tag}</li>
              ))}
            </ul>
          ) : (
            <p>No tags available</p>
          )}
        </div>
        <p>Description: {food.description}</p>
        <p>{food.available ? "Available" : "Sold Out"}</p>
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
    </div>
  );
};

export default FoodPage;
