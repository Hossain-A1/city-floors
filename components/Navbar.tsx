"use client";
// import useProductSearch from "@/hooks/useProductSearch";
import { getAuth, onAuthStateChanged, User, signOut } from "firebase/auth";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { BsCart4 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import app from "../firebase/firebase-init";
import { cn } from "@/lib/utils";
import Button, { buttonVariants } from "./ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { logout } from "@/redux/features/auth/authSlice";

const Navbar = () => {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state: RootState) => state.cart);
  const { userAndToken } = useSelector((state: RootState) => state.auth);

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
      router.push('/login')
      toast.success('Logout!')
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <nav
      className='fixed top-0 left-0 z-[999] 
    right-0 lg:h-20 shadow-sm backdrop-blur-md bg-light/70'
    >
      <div className='container flex  items-center lg:justify-between  w-full h-full max-lg:relative'>
        <div className='max-lg:absolute max-lg:top-0 max-lg:left-0 px-2 max-lg:right-0 max-lg:bg-light/70  border-b  flex justify-between items-center gap-5 w-full h-20 '>
          <div className='flex items-center justify-center gap-0.5'>
            <span className='text-4xl font-extrabold text-orange'>
              <MdOutlineShoppingCartCheckout />
            </span>
            <Link
              onClick={() => setOpenModal(false)}
              href='/'
              className='text-2xl font-extrabold text-blue'
            >
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
          <div className='max-lg:bg-blue max-lg:eq max-lg:text-light max-lg:h-[100vh] flex max-lg:flex-col   items-center gap-10 lg:justify-between max-lg:origin-left eq max-lg:absolute max-lg:left-0 max-lg:bottom-0 max-lg:top-20 max-lg:right-20 z-[998] h-full max-lg:justify-center max-lg:items-center'>
            <ul className='flex max-lg:flex-col justify-center items-center gap-5 '>
              <li>
                <Link
                  href='/shop'
                  onClick={() => setOpenModal(false)}
                  className='font-semibold text-lg'
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  href='supports'
                  onClick={() => setOpenModal(false)}
                  className='font-semibold text-lg cursor-pointer'
                >
                  Support
                </Link>
              </li>
              <li>
                <Link href='#' onClick={() => setOpenModal(false)}>
                  <FaRegHeart className='font-semibold text-lg  cursor-pointer' />
                </Link>
              </li>
              <li>
                <Link
                  href='/cart'
                  onClick={() => setOpenModal(false)}
                  className='relative'
                >
                  <span className='absolute font-bold left-4 -top-4 w-5 bg-orange text-light text-center rounded-full'>
                    {cartItems.length}
                  </span>
                  <BsCart4 className='font-semibold text-dark max-lg:text-light text-xl cursor-pointer' />
                </Link>
              </li>
            </ul>
            {!user && !userAndToken?.user ? (
              <ul className='flex   max-lg:flex-col  items-center gap-5 '>
                <li>
                  <Link
                    onClick={() => setOpenModal(false)}
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
                    onClick={() => setOpenModal(false)}
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
                <div onClick={() => setOpenModal(false)}>
                  {user && (
                    <Button variant='danger' onClick={handleSignOut}>
                      Logout
                    </Button>
                  )}
                  {userAndToken?.user && (
                    <Button variant='danger' onClick={() => dispatch(logout())}>
                      Logout
                    </Button>
                  )}
                </div>
                {user?.photoURL && !userAndToken?.user && (
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

            {userAndToken?.user && <b>{userAndToken.user.email}</b>}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
