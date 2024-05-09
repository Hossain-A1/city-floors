import Image from "next/image";
import Button, { buttonVariants } from "./ui/Button";
import { FaCartArrowDown } from "react-icons/fa";
import { GiThreeLeaves } from "react-icons/gi";
import Link from "next/link";
import { cn } from "@/lib/utils";
const HeroSection = () => {
  return (
    <main className='container sp  lg:h-[calc(100vh-5rem)] h-full w-full max-md:mt-10 mt-20 '>
      <section className='flex  justify-center h-full w-full items-center gap-10 max-md:flex-col-reverse'>
        <figure className=' md:w-1/2 flex flex-col items-center justify-center h-full w-full '>
          <Image
            src='https://t4.ftcdn.net/jpg/02/16/29/61/240_F_216296159_7iqUZn7zRPbNr85VXVTJt1M0Zv1gUo0S.jpg'
            alt='hero image'
            priority
            height={720}
            width={1280}
            className='h-full w-full object-fill'
          />
        </figure>

        <div
          className='flex flex-col justify-center max-md:flex-wrap items-center md:items-start gap-5 md
        :h-3/4 md:w-1/2 h-full w-full'
        >
          <span>
            <GiThreeLeaves className='text-6xl rotate-45 text-blue' />
          </span>
          <h5>Best Quality Products</h5>
          <h1 className='md:leading-[4.5rem] leading-[3rem] max-md:text-center'>
            Join the CityFloors e-shop today!
          </h1>
          <p>
            CityFloors now offers a diverse range of products including stylish
            clothing, electronics, gourmet foods, and sports equipment, all
            available through our user-friendly online shop.
          </p>
          <div>
            <Link
              href='/shop'
              className={cn(
                buttonVariants({ variant: "secondary" }),
                "flex justify-center items-center gap-2.5"
              )}
            >
              <span>
                <FaCartArrowDown className='text-lg' />{" "}
              </span>
              shope now
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HeroSection;
