import React from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa";
import { IoMdStar } from "react-icons/io";
import { IoStarHalf } from "react-icons/io5";
import Image from 'next/image';
const wishlist = () => {
    return (
        <div className='w-full h-full p-10 flex flex-col gap-20'>
            <div className='flex justify-around items-center'>
                <h1>Wishlist(4)</h1>
                <button className='w-[223px] h-[56px] px-2 py-2 border border-gray-500'>Move All To Bag</button>
            </div>


            {/* wishlist cards */}

            <div className='flex gap-4 mx-2'>
                {/* Card 1 */}
            <div className='w-[270px] h-[322px] flex flex-col items-center relative'>
                {/* Delete Icon */}
                <button className='absolute top-2 right-2'>
                    <RiDeleteBin6Line />
                </button>

                {/* Product Image */}
                <Image src={"/Frame 606.png"} width={178} height={129} alt='' />

                {/* Add to Cart Button */}
                <button className='text-white bg-black w-full px-2 py-2'>Add to Cart</button>

                {/* Product Title */}
                <h1>Gucci duffle bag</h1>

                {/* Price Details */}
                <p className='text-[#DB4444]'>$960 <span className='line-through text-black'>$1160</span></p>
            </div>

            {/* Card 2 */}
            <div className='w-[270px] h-[322px] flex flex-col items-center relative'>
                {/* Delete Icon */}
                <button className='absolute top-2 right-2'>
                    <RiDeleteBin6Line />
                </button>

                {/* Product Image */}
                <Image src={"/Frame 610.png"} width={178} height={129} alt='' />

                {/* Add to Cart Button */}
                <button className='text-white bg-black w-full px-2 py-2'>Add to Cart</button>

                {/* Product Title */}
                <h1>RGB liquid CPU Cooler</h1>

                {/* Price Details */}
                <p className='text-[#DB4444]'>$1960</p>
            </div>

            {/* Card 3 */}
            <div className='w-[270px] h-[322px] flex flex-col items-center relative'>
                {/* Delete Icon */}
                <button className='absolute top-2 right-2'>
                    <RiDeleteBin6Line />
                </button>

                {/* Product Image */}
                <Image src={"/jj.png"} width={178} height={129} alt='' />

                {/* Add to Cart Button */}
                <button className='text-white bg-black w-full px-2 py-2'>Add to Cart</button>

                {/* Product Title */}
                <h1>GP11 Shooter USB Gamepad</h1>

                {/* Price Details */}
                <p className='text-[#DB4444]'>$550</p>
            </div>

            {/* Card 4 */}
            <div className='w-[270px] h-[322px] flex flex-col items-center relative'>
                {/* Delete Icon */}
                <button className='absolute top-2 right-2'>
                    <RiDeleteBin6Line />
                </button>

                {/* Product Image */}
                <Image src={"/hh.png"} width={178} height={129} alt='' />

                {/* Add to Cart Button */}
                <button className='text-white bg-black w-full px-2 py-2'>Add to Cart</button>

                {/* Product Title */}
                <h1>Quilted Satin Jacket</h1>

                {/* Price Details */}
                <p className='text-[#DB4444]'>$760</p>
            </div>
            </div>


            {/* For You Section Heading */}
            <div className='flex flex-col gap-20'>
            <div className='flex gap-2 items-center'>
                <div className='bg-[#DB4444] text-[#DB4444] h-[40px] w-[20px] rounded-md'>
                    .
                </div>
                <h1 className='text-[#DB4444] font-bold text-[20px]'>Just For You</h1>
            </div>
            <div className='grid md:grid-cols-4'>
                    {/* Card 1 */}
                <div className='hover:cursor-pointer'>
                    <div className='flex justify-end w-[190px]'>                                <div>
                        <FaRegHeart className='text-xl' />
                        <FaRegEye className='text-xl' />
                    </div>
                    </div>
                    <Image className='py-2' src={"/cat.png"} width={"190"} height={"180"} alt=''>
                    </Image>
                    <p className='font-bold'>Breed Dry Dog Food</p>
                    <div className='flex'>
                        <div>
                            <p className='text-[#DB4444]'>$100</p>
                        </div>
                        <div className='flex items-center'>
                            <IoMdStar className='text-[#FFAD33]' />
                            <IoMdStar className='text-[#FFAD33]' />
                            <IoMdStar className='text-[#FFAD33]' />
                            <IoMdStar className='text-[#FFAD33]' />
                            <IoStarHalf className='text-[#FFAD33]' />
                            <p className='font-light'>(35)</p>
                        </div>
                    </div>
                </div>
                {/* Card 2 */}
                <div className='hover:cursor-pointer'>
                    <div className='flex justify-end w-[190px]'>                                <div>
                        <FaRegHeart className='text-xl' />
                        <FaRegEye className='text-xl' />
                    </div>
                    </div>
                    <Image className='py-2' src={"/Frame.png"} width={"190"} height={"180"} alt=''>
                    </Image>
                    <p className='font-bold'>CANON EOS DSLR Camera </p>
                    <div className='flex'>
                        <div>
                            <p className='text-[#DB4444]'>$60</p>
                        </div>
                        <div className='flex items-center'>
                            <IoMdStar className='text-[#FFAD33]' />
                            <IoMdStar className='text-[#FFAD33]' />
                            <IoMdStar className='text-[#FFAD33]' />
                            <IoMdStar className='text-[#FFAD33]' />
                            <IoStarHalf className='text-[#FFAD33]' />
                            <p className='font-light'>(95)</p>
                        </div>
                    </div>
                </div>
                {/* card 3 */}
                <div className='hover:cursor-pointer'>
                    <div className='flex justify-end w-[190px]'>                                <div>
                        <FaRegHeart className='text-xl' />
                        <FaRegEye className='text-xl' />
                    </div>
                    </div>
                    <Image className='py-2' src={"/ideapad.png"} width={"190"} height={"180"} alt=''>
                    </Image>
                    <p className='font-bold'>ASUS FHD Gaming Laptop</p>
                    <div className='flex'>
                        <div>
                            <p className='text-[#DB4444]'>$700</p>
                        </div>
                        <div className='flex items-center'>
                            <IoMdStar className='text-[#FFAD33]' />
                            <IoMdStar className='text-[#FFAD33]' />
                            <IoMdStar className='text-[#FFAD33]' />
                            <IoMdStar className='text-[#FFAD33]' />
                            <IoStarHalf className='text-[#FFAD33]' />
                            <p className='font-light'>(99)</p>
                        </div>
                    </div>
                </div>
                {/* Card 4 */}
                <div className='hover:cursor-pointer'>
                    <div className='flex justify-end w-[190px]'>                                <div>
                        <FaRegHeart className='text-xl' />
                        <FaRegEye className='text-xl' />
                    </div>
                    </div>
                    <Image className='py-2' src={"/curology.png"} width={"190"} height={"180"} alt=''>
                    </Image>
                    <p className='font-bold'>Curology Product Set </p>
                    <div className='flex'>
                        <div>
                            <p className='text-[#DB4444]'>$500</p>
                        </div>
                        <div className='flex items-center'>
                            <IoMdStar className='text-[#FFAD33]' />
                            <IoMdStar className='text-[#FFAD33]' />
                            <IoMdStar className='text-[#FFAD33]' />
                            <IoMdStar className='text-[#FFAD33]' />
                            <IoStarHalf className='text-[#FFAD33]' />
                            <p className='font-light'>(145)</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            
        </div>
    )
}

export default wishlist
