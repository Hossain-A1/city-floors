import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0
    right-0 h-20 border-b ">
      <div className="flex flex-col items-center justify-center  w-full h-full">
        <ul className="flex justify-center items-center gap-5">
          <li>
            <Link href='/shop'>Shop</Link>
          </li>
          <li>
            <Link href='/support'>Support</Link>
          </li>
          <li>
            <Link href='/login'>Login</Link>
          </li>
          <li>
            <Link href='/signup'>Sign up</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar