import Image from "next/image";
import SectionTitle from "./ui/SectionTitle";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/Button";

const ImageHeroSection = () => {
  return (
    <div className='container sp'>
      <div className='flex items-center justify-center max-md:flex-col gap-5 lg:h-[26rem] xl:h-[30rem] md:h-[20rem] h-full w-full lg:overflow-hidden '>
        <div className=' left h-full w-full  relative z-20 hover:scale-105 eq '>
          <Image
            src='https://t4.ftcdn.net/jpg/03/28/37/93/360_F_328379347_xEKgEB2wkjAJmcqSTmrg4uKxfWrlL7D9.jpg'
            alt='hero image headphones'
            priority
            height='720'
            width='1280'
            className='h-full w-full object-cover '
          />
          <div className='absolute top-5 left-5 right-0 bottom-0 z-10 space-y-5 '>
            <h2 className="heading-2">Sony wireless headphones</h2>
            <p className="max-md:hidden">
              Elevate your audio experience with cutting-edge technology,
              seamless connectivity, and unparalleled comfort.
            </p>
            <Link
              href='/shop'
              className={cn(
                buttonVariants({ variant: "outline" }),
                "animate-bounce"
              )}
            >
              Check now
            </Link>
          </div>
        </div>

        <div className='middle flex flex-col items-center justify-between gap-5 h-full w-full  '>
          <div className='lg:h-[12rem] xl:h-[14rem] h-full w-full  hover:scale-105 eq '>
            <Image
              src='https://t4.ftcdn.net/jpg/04/16/25/41/360_F_416254116_himOdBQepnp9VxudpqPkkEHY8WevDB7k.jpg'
              alt='hero image'
              priority
              height='720'
              width='1280'
              className='h-full w-full object-fill  relative'
            />
          </div>
          <div className='lg:h-[12rem] xl:h-[14rem] h-full w-full  hover:scale-105 eq '>
            <Image
              src='https://t3.ftcdn.net/jpg/01/21/81/86/360_F_121818673_6EID5iF76VCCc4aGOLJkd94Phnggre3o.jpg'
              alt='hero image'
              priority
              height='720'
              width='1280'
              className='h-full w-full object-fill  relative'
            />
          </div>
        </div>
        <div className='right flex flex-col gap-5 h-full lg:w-[50rem] w-full'>
          <div className='lg:h-[8rem] xl:h-[10rem] h-full w-full hover:scale-105 eq '>
            <Image
              src='https://t3.ftcdn.net/jpg/02/67/28/72/360_F_267287228_3Mp8gpCgntjYoIc3hBG7ZsBz5a010SBu.jpg'
              alt='hero image'
              priority
              height='720'
              width='1280'
              className='h-full w-full object-fill  relative'
            />
          </div>
          <div className='lg:h-[18rem] xl:h-[20rem] h-full w-full hover:scale-105 eq '>
            <Image
              src='https://t4.ftcdn.net/jpg/00/71/11/85/240_F_71118598_qDoFuBIaiE9WlHifZKpEI3gAz7u0m3VS.jpg'
              alt='hero image'
              priority
              height='720'
              width='1280'
              className='h-full w-full object-fill  relative'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageHeroSection;
