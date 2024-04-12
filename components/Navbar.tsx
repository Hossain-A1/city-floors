"use client";
// import useProductSearch from "@/hooks/useProductSearch";
import { getAuth, onAuthStateChanged, User, signOut } from "firebase/auth";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import app from "../firebase/firebase-init";
import { cn } from "@/lib/utils";
import Button, { buttonVariants } from "./ui/Button";

const Navbar = () => {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [openModal, setOpenModal] = useState<boolean>(false);

  useEffect(() => {
    const auth = getAuth(app);

    // Function to handle authentication state change
    const unsubscribe = onAuthStateChanged(auth, (data) => {
      if (data) {
        setUser(data);
      } else {
        console.log("No user found");
      }
    });

    return () => unsubscribe(); // Unsubscribe from the onAuthStateChanged listener when component unmounts
  }, []);

  const handleSignOut = async () => {
    const auth = getAuth(app);
    try {
      await signOut(auth);
      router.push("/login");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  // const { searchQuery, handleSearch, filteredProduct } = useProductSearch(
  //   data || []
  // );
  return (
    <nav
      className='fixed top-0 left-0 z-[999] 
    right-0 lg:h-20 shadow-sm backdrop-blur-xl bg-light/70'
    >
      <div className='container flex  items-center lg:justify-between  w-full h-full max-lg:relative'>
        <div className='max-lg:absolute max-lg:top-0 max-lg:left-0 px-2 max-lg:right-0 max-lg:bg-light/70  border-b  flex justify-between items-center gap-5 w-full h-20 '>
          <div className='flex items-center justify-center gap-0.5'>
            <span className='text-4xl font-extrabold text-orange'>
              <MdOutlineShoppingCartCheckout />
            </span>
            <Link href='/' className='text-2xl font-extrabold text-blue'>
              CityFloors
            </Link>
          </div>
          <div
            onClick={() => setOpenModal(!openModal)}
            className='flex flex-wrap w-8  justify-items-end cursor-pointer max-lg:duration-700 lg:hidden'
          >
            <span
              className={`${
                !openModal
                  ? "h-1 eq bg-blue mb-1 w-full"
                  : "rotate-45 eq -translate-x-1 translate-y-1 h-1 bg-blue  w-full"
              }`}
            ></span>
            <span
              className={`${!openModal ? "h-1 eq bg-blue mb-1 w-3/4" : ""}`}
            ></span>
            <span
              className={`${
                !openModal
                  ? "h-1 eq bg-blue mb-1 w-full"
                  : "-rotate-45 eq -translate-x-1 h-1 bg-blue  w-full"
              }`}
            ></span>
          </div>
        </div>

        <div className={`${!openModal ? "max-lg:hidden" : "visible eq"}`}>
          <div className='max-lg:bg-blue max-lg:eq max-lg:text-light max-lg:h-[100vh] flex max-lg:flex-col   items-center gap-10 lg:justify-between max-lg:origin-left eq max-lg:absolute max-lg:left-0 max-lg:bottom-0 max-lg:top-20 max-lg:right-20 z-[998]'>
            <ul className='flex max-lg:flex-col justify-center items-center gap-5 '>
              <li>
                <Link href='/shop' className='font-semibold text-lg'>
                  Shop
                </Link>
              </li>
              <li>
                <Link href='/support' className='font-semibold text-lg'>
                  Support
                </Link>
              </li>
              <li className='max-lg:hidden relative '>
                <IoMdSearch className='absolute font-medium text-dark text-2xl  top-2.5 left-1' />
                <input
                  // onChange={handleSearch}
                  // value={searchQuery}
                  type='search'
                  placeholder='Search'
                  className='px-8 py-2 rounded outline-none border focus:border-blue text-lg'
                />
              </li>
            </ul>
            {!user ? (
              <ul className='flex   max-lg:flex-col justify-between items-center gap-5'>
                <li >
                  <Link
                    href='/login'
                    className={cn(
                      buttonVariants({ variant: "secondary" }),
                      "w-40 "
                    )}
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    href='/signup'
                    className={cn(
                      buttonVariants({ variant: "orange" }),
                      "w-40"
                    )}
                  >
                    Sign up
                  </Link>
                </li>
              </ul>
            ) : (
              <div className='flex justify-center items-center gap-5'>
                <div>
                  <Button
                 
                    variant='danger'
                    onClick={handleSignOut}
                  >
                    Logout
                  </Button>
                </div>
                {user.photoURL && (
                  <figure className='h-14 w-14 rounded-full overflow-hidden'>
                    <Image
                      src={user.photoURL}
                      alt={user.displayName || "User Photo"}
                      height={64}
                      width={64}
                      priority
                      className='h-full w-full object-cover'
                    />
                  </figure>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
