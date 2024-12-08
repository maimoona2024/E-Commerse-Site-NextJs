import React from "react";
import { LuSendHorizontal } from "react-icons/lu";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 py-10 px-10">
        {/* Exclusive Section */}
        <div>
          <h2 className="text-lg font-bold mb-4">Exclusive</h2>
          <p className="mb-2 font-extralight">Subscribe</p>
          <p className="text-sm mb-4 font-extralight">Get 10% off your first order</p>
          <div className="flex items-center border border-white rounded-sm overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent p-2 w-full text-sm outline-none"
            />
            <button className=" text-white p-2">
            <LuSendHorizontal />
            </button>
          </div>
        </div>

        {/* Support Section */}
        <div>
          <h2 className="text-lg font-bold mb-4">Support</h2>
          <p className="text-sm mb-2 font-extralight">111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
          <p className="text-sm mb-2 font-extralight">exclusive@gmail.com</p>
          <p className="text-sm font-extralight">+88015-88888-9999</p>
        </div>

        {/* Account Section */}
        <div>
          <h2 className="text-lg font-bold mb-4">Account</h2>
          <ul className="space-y-2 text-sm">
            <li className="font-extralight">My Account</li>
            <li className="font-extralight">Login / Register</li>
            <li className="font-extralight">Cart</li>
            <li className="font-extralight">Wishlist</li>
            <li className="font-extralight">Shop</li>
          </ul>
        </div>

        {/* Quick Link Section */}
        <div>
          <h2 className="text-lg font-bold mb-4">Quick Link</h2>
          <ul className="space-y-2 text-sm">
            <li className="font-extralight">Privacy Policy</li>
            <li className="font-extralight">Terms Of Use</li>
            <li className="font-extralight">FAQ</li>
            <li className="font-extralight">Contact</li>
          </ul>
        </div>

        {/* Download App Section */}
        <div>
          <h2 className="text-lg font-bold mb-4">Download App</h2>
          <p className="text-sm mb-4 font-extralight">Save $3 with App New User Only</p>
          <div className="flex gap-2">
          <div>
          <Image src="/Qr Code.png" width={65} height={65} alt="Google Play" />
          </div>
          <div className="flex flex-col">
          <Image src="/GooglePlay.png" width={90} height={90} alt="Google Play" />
          <Image src="/AppStore.png" width={90} height={90} alt="Google Play" />
          </div>
          </div>
          <div className="flex gap-4 mt-4 text-lg">
            <a href="#" aria-label="Facebook">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="flex justify-center items-center border-t border-gray-800 font-extralight text-sm h-12">
        <p>© Copyright Rimel 2022. All right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
