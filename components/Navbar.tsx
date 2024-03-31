// import useProductSearch from "@/hooks/useProductSearch";
import Link from "next/link";

const Navbar = () => {
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
        <ul className='flex justify-center items-center gap-5'>
          <li>
            <Link href='/login'>Login</Link>
          </li>
          <li>
            <Link href='/signup'>Sign up</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
