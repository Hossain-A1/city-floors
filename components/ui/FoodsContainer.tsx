import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { productType } from "@/types/productsType";
import React from "react";
import Review from "../Review";
import { CurrencyFormatter } from "../CurrencyFormatter";

interface FoodsContainerProps {
  product: productType;
}

const FoodsContainer: React.FC<FoodsContainerProps> = ({ product }) => {
  return (
    
     
      <div className="flex flex-col gap-1 ">
        {/* products will come from api */}
        <div className='lg:h-[15rem] xl:h-[18.5rem] h-full w-full border-4 bg-dark/5 '>
          <Image
            src={product.images[0]}
            alt='hero image'
            priority
            height='720'
            width='1280'
            className='h-full w-full object-fill'
          />

    
        </div>
        <div className="flex flex-col items-center gap-2.5">
      <small>{product.category}</small>
      <h3>{product.title}</h3>
      <h4>{<Review rate={product}/>}</h4>
      <b>{<CurrencyFormatter amount={product.price}/>}</b>
     </div>
      </div>
  
  );
};

export default FoodsContainer;
