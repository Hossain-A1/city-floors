"use client";
import React from "react";
import SectionTitle from "./ui/SectionTitle";
import Image from "next/image";
import Loading from "./ui/Loading";
import Error from "./ui/Error";
import useFetch from "@/hooks/useFetch";
import { productType } from "@/types/productsType";
import { Eye, Heart } from "lucide-react";
import { useRouter } from "next/navigation";

const Features = () => {
  const { data: products, error, isLoading } = useFetch("/api/products");
  const navigate = useRouter();
  return (
    <div className='space-y-5 '>
      <SectionTitle
        title='features'
        subtitle='This is our populer features much people like it.'
      />
      <div>
        {isLoading && <Loading isLoading={isLoading} />}
        {error &&(
          <div>
             <Error error={error.message} />
             <h2>Check your internet connection or refesh!</h2>
          </div>
        )
        
        
        }
      
        <div className='best-products h-full w-full grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-5'>
          {/* products will come from api */}
          {products &&
            products.slice(13, 16).map((product: productType) => (
              <div
                onClick={() => navigate.push(`shop/${product._id}`)}
                key={product._id}
                className='lg:h-[18rem] xl:h-[20.5rem]  h-full w-full border-4 border-blue border-opacity-5  eq relative cursor-pointer overflow-hidden  z-20'
              >
                <Image
                  src={product.images[0]}
                  alt='hero image'
                  priority
                  height='720'
                  width='1280'
                  className='h-full w-full object-fill'
                />

                <div className='best-feature-modal flex gap-5 justify-center items-center'>
                  <button className='p-2  bg-orange rounded-full shadow-md shadow-blue'>
                    <Heart className='text-light cursor-pointer text-6xl ' />{" "}
                  </button>
                  <button className='p-2 bg-light rounded-full shadow-md shadow-blue'>
                    <Eye className='text-orange cursor-pointer text-6xl ' />{" "}
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
