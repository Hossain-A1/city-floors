import React from 'react'
import SectionTitle from './ui/SectionTitle'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { buttonVariants } from './ui/Button'

const BestSeller = () => {
  return (
    <div className='h-[100vh] w-full flex flex-col gap-2.5'>
      <div>
        <SectionTitle title='best seller' subtitle={`Don't wait any longer and discover other related products`}/>
      </div>
      <div className="best-products h-1/2 w-full">
        {/* products will come from api */}
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem soluta reiciendis aliquid voluptatibus facilis odio, qui nam doloribus, praesentium libero, blanditiis assumenda! Dolorem, repellendus. Quidem dicta asperiores quas quae beatae!</p>
      </div>

      <div className='lg:h-1/2 h-full w-full overflow-hidden relative z-20 hover:scale-105 eq '>
      <Image
              src='https://t3.ftcdn.net/jpg/03/81/20/92/240_F_381209299_b9mNonInK8iQSkCikCVWRCheYcYfnHYE.jpg'
              alt='best sell image'
              priority
              height='720'
              width='1280'
              className='h-full w-full object-fill  relative'
            />

<div className='absolute top-1/2 lg:left-1/2 left-0 transform lg:-translate-x-10 -translate-y-1/2 z-10 space-y-5 text-center lg:w-1/2 w-full '>
  <h1>Best deal today!</h1>
  <p>
    Grab the Hottest Deals Today for the Best Prices on Quality Products! Limited Time Offer, Act Fast
  </p>
  <Link
    href='/shop'
    className={cn(
      buttonVariants({ variant: "secondary" }),
      "animate-custom-ping"
    )}
  >
    Shop Now
  </Link>
</div>

      </div>
    </div>
  )
}

export default BestSeller