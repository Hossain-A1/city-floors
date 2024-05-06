import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Review from "@/components/Review";
import { CurrencyFormatter } from "@/components/CurrencyFormatter";
import { buttonVariants } from "@/components/ui/Button";
import { productType } from "@/types/productsType";
interface FoodsContainerProps {
  product: productType;
}
const ProductDetails: React.FC<FoodsContainerProps> = ({ product }) => {
  const [changeImage, setChangeImage] = useState(product.images[0]);
  return (
    <div className='space-y-20'>
      <div className='flex lg:flex-row flex-col justify-center items-start gap-8 py-10 lg:px-20 bg-dark/5 bg-opacity-5 '>
        {/* Product Image */}
        <div className='space-y-5'>
          <figure className='lg:h-[30rem] lg:w-[35rem] h-[15rem] w-full  overflow-hidden'>
            <Image
              src={changeImage}
              alt='Product Image'
              priority
              height={720}
              width={1280}
              className='object-fill h-full w-full'
            />
          </figure>
          <div className='flex items-center gap-5'>
            {product.images.map((image, i) => (
              <figure
                key={i}
                className='lg:h-[5rem] lg:w-[5rem] h-full w-full '
              >
                <Image
                  onClick={() => setChangeImage(image)}
                  src={image}
                  alt='Product Image'
                  priority
                  height={720}
                  width={1280}
                  className='object-fill h-full w-full cursor-pointer'
                />
              </figure>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className='flex flex-col justify-start gap-2.5'>
          <div className='space-y-2.5'>
            <small className='text-blue'>{product.category}</small>
            <Review rate={product} />
            <h2 className='text-4xl tracking-wider font-semibold capitalize'>
              {product?.title}
            </h2>
            <div className='flex items-center gap-1'>
              <b className='text-2xl font-bold'>
                <CurrencyFormatter amount={product.price} />
              </b>
              <small> + free shopping</small>
            </div>
            <small className='text-lg font-extralight'>
              {product.description}
            </small>
          </div>

          <div className='flex items-center justify-center gap-2.5'>
            {/* Add to Cart Button */}
            <button>+</button>
            <Link
              href={`/shop/${product._id}`}
              className={cn(
                buttonVariants({ variant: "outline", size: "full" })
              )}
            >
              Add to Cart
            </Link>
          </div>
        </div>
      </div>

      <div>
        <hr />
        <div className=''>
          <div className='flex gap-5'>
            <h2>Description</h2>
            <h2>Reviews {product.rating}</h2>
          </div>
          <b>{product.description}</b>
        </div>
      </div>

      <div className='related-products'></div>
    </div>
  );
};

export default ProductDetails;
