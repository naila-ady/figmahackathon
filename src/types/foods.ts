export  interface Food {
    _id: string;
    name: string;
    category: string;
    price: number;
    _type:"food"
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
    inventory:number;

  }