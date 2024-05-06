"use client";
import Link from "next/link";
import { FaFacebookF, FaYoutube, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className='bg-black py-10 px-20 min-h-screen'>
      <div className='bg-blue/30 w-full py-3 hover:bg-blue/40 eq flex items-center justify-center mb-10'>
        <button onClick={() => window.scrollTo(0, 0)} className='text-light'>
          Back to Top
        </button>
      </div>
      <div className='grid grid-cols-3 max-lg:grid-cols-1 gap-5 text-light py-20 '>
        <div className='flex flex-col items-center p-10'>
          <div>
            <span className='text-6xl  font-semibold'>#</span>
            <h2>
              SKYWHAKFORGE <br />
              Providing reliable drones since 2002
            </h2>
          </div>
        </div>

        <div className='flex max-lg:flex-col max-lg:justify-center justify-around gap-10 col-span-2'>
          <ul className='flex flex-col gap-3 items-center  '>
            <h2 className='text-md text-light/60 font-semibold underline underline-offset-4 uppercase'>
              Quick Links
            </h2>
            <li className=''>
              <Link href='/' className=' text-xl font-semibold'>
                Home
              </Link>
            </li>

            <li className=''>
              <Link href='/about-us' className=' text-xl font-semibold'>
                About
              </Link>
            </li>
            <li className=''>
              <Link href='/drones-page' className=' text-xl font-semibold'>
                Drones
              </Link>
            </li>
            <li className=''>
              <Link href='/offers' className=' text-xl font-semibold'>
                Offers
              </Link>
            </li>
          </ul>

          <ul className='flex flex-col gap-3 items-center  '>
            <h2 className='text-md text-light/60 font-semibold underline underline-offset-4 uppercase'>
              company
            </h2>
            <li className=''>
              <Link href='/about' className=' text-xl font-semibold'>
                About
              </Link>
            </li>
            <li className=''>
              <Link href='/about' className=' text-xl font-semibold'>
                Galleries
              </Link>
            </li>
            <li className=''>
              <Link href='/support' className=' text-xl font-semibold'>
                Support
              </Link>
            </li>
            <li className=''>
              <Link href='/login' className=' text-xl font-semibold'>
                login
              </Link>
            </li>
          </ul>
          <div className='flex flex-col items-center gap-5'>
            <h2 className='text-md text-light/60 font-semibold underline underline-offset-4 uppercase'>
              {" "}
              LEGAL
            </h2>
            <Link href='#' className='text-xl font-semibold'>
              Terms of use
            </Link>
            <Link href='#' className='text-xl font-semibold'>
              Privacy policy
            </Link>
            <Link href='#' className='text-xl font-semibold'>
              Cookie policy
            </Link>
          </div>

          <div className='social text-light flex flex-col items-center gap-5'>
            <h2 className='text-md text-light/60 font-semibold underline underline-offset-4 uppercase'>
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
