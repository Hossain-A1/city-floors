import { productType } from '@/types/productsType'
import Image from 'next/image';
import React from 'react'
import Review from '../Review';
import { CurrencyFormatter } from '../CurrencyFormatter';
interface OparatingContainerProps{
product:productType
}
const OparatingContainer :React.FC<OparatingContainerProps>= ({product}) => {
  return (
    
     
    <div className=" flex flex-col gap-1">
      {/* products will come from api */}
      <div className='lg:h-[15rem] xl:h-[18.5rem] h-full w-full border-4 border-blue border-opacity-5  '>
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
    <span>{<CurrencyFormatter amount={product.price}/>}</span>
   </div>
    </div>

);
}

export default OparatingContainer