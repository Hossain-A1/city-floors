import React from "react";
import SectionTitle from "./ui/SectionTitle";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/Button";
import { FcLike } from "react-icons/fc";

const BestSeller = () => {
  return (
    <div className='h-full w-full flex flex-col gap-2.5'>
      <div>
        <SectionTitle
          title='best seller'
          subtitle={`Don't wait any longer and discover other related products`}
        />
      </div>
      <div className='best-products h-full w-full grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-5'>
        {/* products will come from api */}
        <div className='lg:h-[15.5rem] xl:h-[18rem] h-full w-full border-4 border-blue border-opacity-5 hover:scale-105 eq relative  z-30 '>
          <Image
            src='https://t4.ftcdn.net/jpg/04/16/25/41/360_F_416254116_himOdBQepnp9VxudpqPkkEHY8WevDB7k.jpg'
            alt='hero image'
            priority
            height='720'
            width='1280'
            className='h-full w-full object-fill '
          />

          <div className='absolute left-0  right-0 bottom-0 w-full h-4/5'>
           <div className="feature-modal h-full w-full z-50">
 666
           </div>
          </div>
        </div>
        <div className='lg:h-[15.5rem] xl:h-[18rem] h-full w-full border-4 border-blue border-opacity-5 hover:scale-105 eq '>
          <Image
            src='https://t4.ftcdn.net/jpg/04/16/25/41/360_F_416254116_himOdBQepnp9VxudpqPkkEHY8WevDB7k.jpg'
            alt='hero image'
            priority
            height='720'
            width='1280'
            className='h-full w-full object-fill '
          />
        </div>
        <div className='max-lg:hidden lg:h-[15.5rem] xl:h-[18rem] h-full w-full border-4 border-blue border-opacity-5 hover:scale-105 eq '>
          <Image
            src='https://t4.ftcdn.net/jpg/04/16/25/41/360_F_416254116_himOdBQepnp9VxudpqPkkEHY8WevDB7k.jpg'
            alt='hero image'
            priority
            height='720'
            width='1280'
            className='h-full w-full object-fill'
          />
        </div>
      </div>

      <div className='lg:h-1/2 h-[20rem] w-full overflow-hidden relative z-20 hover:scale-105 eq '>
        <Image
          src='https://t3.ftcdn.net/jpg/03/81/20/92/240_F_381209299_b9mNonInK8iQSkCikCVWRCheYcYfnHYE.jpg'
          alt='best sell image'
          priority
          height='720'
          width='1280'
          className='h-full w-full object-fill'
        />

        <div className='absolute top-1/2 lg:left-1/2 left-0 transform lg:-translate-x-10 -translate-y-1/2 z-10 space-y-5 text-center lg:w-1/2  w-full '>
          <h1>Best deal today!</h1>
          <p>
            Grab the Hottest Deals Today for the Best Prices on Quality
            Products! Limited Time Offer, Act Fast
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
  );
};

export default BestSeller;
