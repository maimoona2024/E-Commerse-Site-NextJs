import Link from "next/link";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";

const Header: React.FC = () => {
  return (
    <>
      {/* Top Header */}
      <div className="bg-black text-white text-sm py-2 px-4 flex justify-around items-center">
        <span>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
          <Link className="text-white font-bold underline ml-2" href="/shop">ShopNow</Link>
        </span>
        <div className="flex items-center space-x-2">
          <select className="bg-black text-white  px-1">
            <option value="en">English</option>
            <option value="fr">French</option>
            <option value="ur">Urdu</option>
          </select>
        </div>
      </div>

      {/* Bottom Header */}
      <header className="bg-white shadow-md py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* Logo */}
          <div className="text-xl font-bold">
            <Link href="/">Exclusive</Link>
          </div>

          {/* Navigation Links */}
          <nav className="flex space-x-6">
            <Link className="hover:underline" href={"/home"}>Home</Link>
            <Link className="hover:underline" href={"/wishlist"}>Wishlist</Link>
            <Link className="hover:underline" href={"/cart"}>Cart</Link>
            <Link className="hover:underline" href={"/signup"}>Sign Up</Link>
          </nav>

          {/* Search Bar and Icons */}
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="What are you looking for? "
              className="border border-gray-300 rounded px-3 py-1 text-sm"
               />
            <button className="text-black">
              <IoSearch />
            </button>

            <button className="text-black">
            <FaRegHeart />
            </button>


            <button className="text-black">
            <MdOutlineShoppingCart />
            </button>
            <button className="text-black">
            <FaRegUser />
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
