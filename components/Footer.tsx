"use client";
import Link from "next/link";
import { FaFacebookF, FaYoutube, FaTwitter } from "react-icons/fa";
import { GiThreeLeaves } from "react-icons/gi";
const Footer = () => {
  return (
    <footer className='bg-black py-10 lg:px-20 min-h-screen w-full'>
      <div className='bg-blue/30 w-full py-3 hover:bg-blue/40 eq flex items-center justify-center mb-10'>
        <button onClick={() => window.scrollTo(0, 0)} className='text-light'>
          Back to Top
        </button>
      </div>
      <div className='grid grid-cols-2 lg:grid-cols-3 gap-5 text-light lg:py-20 items-center '>
        <div className='flex flex-col gap-2.5 items-center justify-center  max-lg:w-[100vw] '>
          <span className='text-6xl  font-semibold'>
            {" "}
            <GiThreeLeaves className='text-6xl rotate-45 text-blue' />
          </span>
          <h1 className='text-light '>Cityfloors store</h1>
          <p className='text-light '>
        
            CityFloors: Your one-stop e-commerce shop for premium home flooring
            solutions. Explore a wide array of options, from hardwood to
            carpeting, all with seamless navigation and top-notch customer
            service.
          </p>
        </div>

        <div className='flex max-lg:flex-col max-lg:justify-center justify-around gap-10 col-span-2'>
          <ul className='flex flex-col gap-3 items-center  '>
            <h2 className='text-2xl text-light/60 font-semibold underline underline-offset-4 capitalize mt-10 mb-10'>
              Quick Links
            </h2>
            <li className=''>
              <Link href='/shop' className=' text-xl '>
                Shop
              </Link>
            </li>

            <li className=''>
              <Link href='/#support' className=' text-xl'>
                Support
              </Link>
            </li>
            <li className=''>
              <Link href='/login' className=' text-xl '>
                Login
              </Link>
            </li>
            <li className=''>
              <Link href='/signup' className=' text-xl '>
                Sign-up
              </Link>
            </li>
          </ul>

          <div className='flex flex-col items-center gap-5'>
            <h2 className='text-2xl text-light/60 font-semibold underline underline-offset-4 capitalize mt-10 mb-10'>
              {" "}
              LEGAL
            </h2>
            <Link href='#' className='text-xl'>
              Terms of use
            </Link>
            <Link href='#' className='text-xl'>
              Privacy policy
            </Link>
            <Link href='#' className='text-xl'>
              Cookie policy
            </Link>
          </div>

          <div className='social text-light flex flex-col items-center gap-5'>
            <h2 className='text-2xl text-light/60 font-semibold underline underline-offset-4 capitalize mt-10 mb-10'>
              Social
            </h2>

            <div className='flex gap-5 justify-center text-light'>
              {" "}
              <span>
                <FaFacebookF className='text-4xl ' />
              </span>
              <span>
                <FaYoutube className='text-4xl ' />
              </span>
              <span>
                <FaTwitter className='text-4xl' />
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
