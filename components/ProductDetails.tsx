import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Review from "@/components/Review";
import { CurrencyFormatter } from "@/components/CurrencyFormatter";
import { buttonVariants } from "@/components/ui/Button";
import { productType } from "@/types/productsType";
import RelatedProducts from "./ui/RelatedProducts";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/features/cart/CartSlice";
interface FoodsContainerProps {
  product: productType;
}
const ProductDetails: React.FC<FoodsContainerProps> = ({ product }) => {
  const [changeImage, setChangeImage] = useState(product.images[0]);

  const [selectedOption, setSelectedOption] = useState<number>(1); // Initial selected option value

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(parseInt(event.target.value)); // Update selected option value
  };
  const dispatch = useDispatch();
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
            <small className='text-blue font-semibold'>
              In Stock ({product.stock})
            </small>
            <br />
            <small className='text-lg font-extralight'>
              {product.description}
            </small>
          </div>

          <div className='flex items-center justify-center gap-10'>
            <select
              id='cars'
              className='p-2.5'
              onChange={handleSelectChange}
              value={selectedOption}
            >
              {[...Array(100)].map((_, index) => (
                <option key={index + 1} value={index }>
                  {index}
                </option>
              ))}
            </select>

            <Link
              onClick={() =>
                dispatch(addToCart({ ...product, count: selectedOption }))
              }
              href={"/cart"}
              className={cn(
                buttonVariants({ variant: "secondary", size: "full" }),
                "text-center w-full"
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
            <b>Description</b>
            <b>Reviews {product.rating}</b>
          </div>
          <small>{product.description}</small>
        </div>
      </div>

      <div className='related-products'>
        <RelatedProducts />
      </div>
    </div>
  );
};

export default ProductDetails;
