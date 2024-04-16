import Image from "next/image";
import Button from "./ui/Button";
import { FaCartArrowDown } from "react-icons/fa";
import { GiThreeLeaves } from "react-icons/gi";
const HeroSection = () => {
  return (
    <main className='lg:h-[calc(100vh-5rem)] h-full w-full max-md:mt-10'>
      <section className='flex  justify-center h-full w-full items-center gap-10 max-md:flex-col-reverse'>
        <figure className='md:h-3/4 md:w-1/2 flex flex-col items-center justify-center h-full w-full'>
          <Image
            src='https://images.pexels.com/photos/341523/pexels-photo-341523.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt='hero image'
            priority
            height='720'
            width='1280'
            className='h-full w-full object-fill'
          />
        </figure>

        <div
          className='flex flex-col justify-center flex-wrap items-center md:items-start gap-5 md
        :h-3/4 md:w-1/2 h-full w-full'
        >
          <span>
            <GiThreeLeaves className='text-6xl rotate-45 text-blue' />
          </span>
          <h5>Best Quality Products</h5>
          <h1 className='md:leading-[4.5rem] leading-[3rem]'>
            Join the CityFloors e-shop today!
          </h1>
          <p>
            CityFloors now offers a diverse range of products including stylish
            clothing, electronics, gourmet foods, and sports equipment, all
            available through our user-friendly online shop.
          </p>
          <div>
            <Button variant='deepLight'>
              <div className='flex justify-center items-center gap-2.5'>
                <span>
                  <FaCartArrowDown className='text-lg' />{" "}
                </span>
                shope now
              </div>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HeroSection;
