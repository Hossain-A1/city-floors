import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { productType } from "@/types/productsType";
import React from "react";

interface FoodsContainerProps {
  product: productType;
}

const FoodsContainer: React.FC<FoodsContainerProps> = ({ product }) => {
  console.log(product)
  return (
    
     
      <div className='best-products h-full w-full grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-5'>
        {/* products will come from api */}
        <div className='lg:h-[15rem] xl:h-[18.5rem] h-full w-full border-4 border-blue border-opacity-5  eq relative  z-20'>
          <Image
            src={product.images[0]}
            alt='hero image'
            priority
            height='720'
            width='1280'
            className='h-full w-full object-fill'
          />

          <div className='best-sell-modal flex justify-center items-center'>
            <p>Lorem ipsum dolor sit</p>
          </div>
        </div>
      </div>
  
  );
};

export default FoodsContainer;
