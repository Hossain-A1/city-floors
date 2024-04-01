"use client"
// import useProductSearch from "@/hooks/useProductSearch";
import { getAuth, onAuthStateChanged, User, signOut } from "firebase/auth";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import app from "../firebase/firebase-init";

const Navbar = () => {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  console.log(user);

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
      className='fixed top-0 left-0
    right-0 h-20 border-b '
    >
      <div className='container flex  items-center justify-between  w-full h-full'>
        <div className='flex items-center justify-center gap-1'>
          <span className='text-2xl font-extrabold bg-blue'></span>
          <Link href='/' className='text-2xl font-extrabold text-blue'>
            CityFloors
          </Link>
        </div>
        <ul className='flex justify-center items-center gap-5'>
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
          <li>
            <input
              // onChange={handleSearch}
              // value={searchQuery}
              type='search'
              placeholder='Search'
              className='px-4 py-2 rounded outline-none border focus:border-blue text-lg'
            />
          </li>
        </ul>
        {!user ? (
          <ul className='flex justify-center items-center gap-5'>
            <li>
              <Link href='/login'>Login</Link>
            </li>
            <li>
              <Link href='/signup'>Sign up</Link>
            </li>
          </ul>
        ) : (
          <div className='flex justify-center items-center gap-5'>
            <div>
              <button className="py-2 px-4 rounded" onClick={handleSignOut}>Logout</button>
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
    </nav>
  );
};

export default Navbar;
