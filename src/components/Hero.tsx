import React from 'react';
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { IoMdStar } from "react-icons/io";
import { IoStarHalf } from "react-icons/io5";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { RiComputerLine } from "react-icons/ri";
import { TiWatch } from "react-icons/ti";
import { IoCameraOutline } from "react-icons/io5";
import { CiHeadphones } from "react-icons/ci";
import { RiRemoteControl2Line } from "react-icons/ri";


import Image from 'next/image';
const Hero = () => {
    return (
        <div id='home' className='p-3 m-5'>
            <div className="bg-white flex">
                {/* Sidebar */}
                <div className="w-1/5 border-r border-gray-300 pr-4">
                    <ul className="list-none p-0">
                        {[
                            "Woman's Fashion >",
                            "Men's Fashion >",
                            "Electronics",
                            "Home & Lifestyle",
                            "Medicine",
                            "Sports & Outdoor",
                            "Baby's & Toys",
                            "Groceries & Pets",
                            "Health & Beauty"
                        ].map((item, index) => (
                            <li key={index} className="mb-2 cursor-pointer">
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Slider */}
                <div className="w-4/5 p-3">
                    <div className="relative w-full overflow-hidden border border-gray-300 rounded-lg">
                        <Image
                            src="/Frame 560.png"
                            alt="Banner"
                            width={"600"}
                            height={"600"}
                            className="w-full h-auto rounded-lg"
                        />
                    </div>
                </div>
            </div>
            <div className='flex gap-2 items-center'>
                <div className='bg-[#DB4444] h-[40px] w-[20px] rounded-md'>
                    .
                </div>
                <h1 className='text-[#DB4444] font-bold text-[20px]'>Today&apos;s</h1>
                </div>


            <div className='flex items-center justify-between py-8'>
                <div>
                    <h1 className='text-3xl font-bold'>Flash Sales</h1>

                </div>
                <div className='flex gap-2 items-center'>
                    <div>
                        <h1 className='text-sm text-[12px] font-bold'>Days</h1>
                        <p className='text-3xl font-bold'>03</p>
                    </div>
                    <div className='text-3xl font-bold text-[#DB4444]'>
                        :
                    </div>
                    <div>
                        <h1 className='text-sm text-[12px] font-bold'>Hours</h1>
                        <p className='text-3xl font-bold'>23</p>
                    </div>
                    <div className='text-3xl font-bold text-[#DB4444]'>
                        :
                    </div>
                    <div>
                        <h1 className='text-sm text-[12px] font-bold'>Minutes</h1>
                        <p className='text-3xl font-bold'>19</p>
                    </div>
                    <div className='text-3xl font-bold text-[#DB4444]'>
                        :
                    </div>
                    <div>
                        <h1 className='text-sm text-[12px] font-bold'>Seconds</h1>
                        <p className='text-3xl font-bold'>56</p>
                    </div>

                </div>
                <div className='flex gap-1'>
                    <FaArrowLeft className='h-[46px] w-[46px] bg-[#d8d4d4] text-black rounded-full p-3' />
                    <FaArrowRight className='h-[46px] w-[46px] bg-[#d8d4d4] text-black rounded-full p-3' />
                </div>
            </div>



            <div className='flex flex-col gap-10'>
                {/* FLASH SALES CARDS */}
                <div>
                    <div className='flex gap-10'>
                        {/* card 1 */}
                        <div className='hover:cursor-pointer'>
                            <div className='flex justify-between w-[190px]'>
                                <label className='bg-[#DB4444] w-12 h-8 px-2 py-2 text-white text-[12px] rounded-lg'>-40%</label>
                                <div>
                                    <FaRegHeart className='text-xl' />
                                    <FaRegEye className='text-xl' />
                                </div>
                            </div>
                            <Image src={"/Frame 611.png"} width={"190"} height={"180"} alt=''>
                            </Image>
                            <p className='font-bold'>HAVIT HV-G92 Gamepad</p>
                            <p className='text-[#DB4444]'>$120 <span className='text-black line-through'>$160</span></p>
                            <div className='flex items-center'>
                                <IoMdStar className='text-[#FFAD33]' />
                                <IoMdStar className='text-[#FFAD33]' />
                                <IoMdStar className='text-[#FFAD33]' />
                                <IoMdStar className='text-[#FFAD33]' />
                                <IoMdStar className='text-[#FFAD33]' />
                                <p className='font-light'>(88)</p>
                            </div>
                        </div>

                        {/* card 2 */}
                        <div className='hover:cursor-pointer'>
                            <div className='flex justify-between w-[190px]'>
                                <label className='bg-[#DB4444] w-12 h-8 px-2 py-2 text-white text-[12px] rounded-lg'>-40%</label>
                                <div>
                                    <FaRegHeart className='text-xl' />
                                    <FaRegEye className='text-xl' />
                                </div>
                            </div>
                            <Image src={"/Frame 612.png"} width={"190"} height={"180"} alt=''>
                            </Image>
                            <p className='font-bold'>AK-900 Wired Keyboard</p>
                            <p className='text-[#DB4444]'>$960 <span className='text-black line-through'>$1160</span></p>
                            <div className='flex items-center'>
                                <IoMdStar className='text-[#FFAD33]' />
                                <IoMdStar className='text-[#FFAD33]' />
                                <IoMdStar className='text-[#FFAD33]' />
                                <IoMdStar className='text-[#FFAD33]' />
                                <IoMdStar className='text-gray-400' />
                                <p className='font-light'>(75)</p>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className='hover:cursor-pointer'>
                            <div className='flex justify-between w-[190px]'>
                                <label className='bg-[#DB4444] w-12 h-8 px-2 py-2 text-white text-[12px] rounded-lg'>-30%</label>
                                <div>
                                    <FaRegHeart className='text-xl' />
                                    <FaRegEye className='text-xl' />
                                </div>
                            </div>
                            <Image src={"/Frame 613.png"} width={"190"} height={"180"} alt=''>
                            </Image>
                            <p className='font-bold'>IPS LCD Gaming Monitor</p>
                            <p className='text-[#DB4444]'>$370 <span className='text-black line-through'>$400</span></p>
                            <div className='flex items-center'>
                                <IoMdStar className='text-[#FFAD33]' />
                                <IoMdStar className='text-[#FFAD33]' />
                                <IoMdStar className='text-[#FFAD33]' />
                                <IoMdStar className='text-[#FFAD33]' />
                                <IoMdStar className='text-[#FFAD33]' />
                                <p className='font-light'>(99)</p>
                            </div>
                        </div>


                        {/* Card 4 */}
                        <div className='hover:cursor-pointer'>
                            <div className='flex justify-between w-[190px]'>
                                <label className='bg-[#DB4444] w-12 h-8 px-2 py-2 text-white text-[12px] rounded-lg'>-30%</label>
                                <div>
                                    <FaRegHeart className='text-xl' />
                                    <FaRegEye className='text-xl' />
                                </div>
                            </div>
                            <Image src={"/Frame 614.png"} width={"190"} height={"180"} alt=''>
                            </Image>
                            <p className='font-bold'>S-Series Comfort Chair </p>
                            <p className='text-[#DB4444]'>$375 <span className='text-black line-through'>$400</span></p>
                            <div className='flex items-center'>
                                <IoMdStar className='text-[#FFAD33]' />
                                <IoMdStar className='text-[#FFAD33]' />
                                <IoMdStar className='text-[#FFAD33]' />
                                <IoMdStar className='text-[#FFAD33]' />
                                <IoStarHalf className='text-[#FFAD33]' />
                                <p className='font-light'>(99)</p>
                            </div>
                        </div>


                        {/* Card 5 */}
                        <div className='hover:cursor-pointer'>
                            <div className='flex justify-between w-[190px]'>
                                <label className='bg-[#DB4444] w-12 h-8 px-2 py-2 text-white text-[12px] rounded-lg'>-30%</label>
                                <div>
                                    <FaRegHeart className='text-xl' />
                                    <FaRegEye className='text-xl' />
                                </div>
                            </div>
                            <Image src={"/Frame 614.png"} width={"190"} height={"180"} alt=''>
                            </Image>
                            <p className='font-bold'>S-Series Comfort Chair </p>
                            <p className='text-[#DB4444]'>$375 <span className='text-black line-through'>$400</span></p>
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

                </div>

                {/* View all products button */}
                <div className='flex justify-center'>
                    <button className='bg-[#DB4444] text-white w-[234px] h-[56px]'>View All Products</button>
                </div>
                {/* Border  */}
                <div className='border-b-2 border-gray-400'></div>



                {/* Categories Section */}
                <div>
                    <div className='flex gap-2 items-center'>
                        <div className='bg-[#DB4444] h-[40px] w-[20px] rounded-md'>

                        </div>
                        <h1 className='text-[#DB4444] font-bold text-[20px]'>Categories</h1>
                    </div>
                    <div className='flex items-center justify-between py-8'>
                        <div>
                            <h1 className='text-3xl font-bold'>Browse by Category</h1>
                        </div>
                        <div className='flex gap-1'>
                            <FaArrowLeft className='h-[46px] w-[46px] bg-[#d8d4d4] text-black rounded-full p-3 hover:cursor-pointer' />
                            <FaArrowRight className='h-[46px] w-[46px] bg-[#d8d4d4] text-black rounded-full p-3 hover:cursor-pointer' />
                        </div>
                    </div>




                    {/* categories section cards */}
                    <div className='flex gap-4'>
                        {/* Card 1 of categories section */}
                        <div className='w-[160px] h-[130] flex flex-col gap-2 items-center border border-gray-500 px-4 py-8 hover:cursor-pointer'>
                            <IoPhonePortraitOutline className='text-4xl text-gray-600' />
                            <p className='text-gray-600'>Phones</p>
                        </div>
                        {/* Card 2 of categories section */}
                        <div className='w-[160px] h-[130] flex flex-col gap-2 items-center border border-gray-500 px-4 py-8 hover:cursor-pointer'>
                            <RiComputerLine className='text-4xl text-gray-600' />
                            <p className='text-gray-600'>Computers</p>
                        </div>
                        {/* Card 3 of categories section */}
                        <div className='w-[160px] h-[130] flex flex-col gap-2 items-center border border-gray-500 px-4 py-8 hover:cursor-pointer'>
                            <TiWatch className='text-4xl text-gray-600' />
                            <p className='text-gray-600'>Watches</p>
                        </div>
                        {/* Card 4 of categories section */}
                        <div className='w-[160px] h-[130] flex flex-col gap-2 items-center border border-gray-500 px-4 py-8 hover:cursor-pointer'>
                            <IoCameraOutline className='text-4xl text-gray-600' />
                            <p className='text-gray-600'>Camera</p>
                        </div>
                        {/* Card 5 of categories section */}
                        <div className='w-[160px] h-[130] flex flex-col gap-2 items-center border border-gray-500 px-4 py-8 hover:cursor-pointer'>
                            <CiHeadphones className='text-4xl text-gray-600' />
                            <p className='text-gray-600'>Headphones</p>
                        </div>
                        {/* Card 6 of categories section */}
                        <div className='w-[160px] h-[130] flex flex-col gap-2 items-center border border-gray-500 px-4 py-8 '>
                            <RiRemoteControl2Line className='text-4xl text-gray-600' />
                            <p className='text-gray-600'>Gaming</p>
                        </div>
                    </div>
                </div>
                {/* Border  */}
                <div className='border-b-2 border-gray-400'></div>

                {/* This month section */}
                <div className='flex gap-2 items-center'>
                    <div className='bg-[#DB4444] h-[40px] w-[20px] rounded-md'>

                    </div>
                    <h1 className='text-[#DB4444] font-bold text-[20px]'>This Month</h1>
                </div>
                <div className='flex items-center justify-between py-2'>
                    <div>
                        <h1 className='text-3xl font-bold'>Best Selling Products</h1>
                    </div>
                    <div className='flex gap-1'>
                        <FaArrowLeft className='h-[46px] w-[46px] bg-[#d8d4d4] text-black rounded-full p-3 hover:cursor-pointer' />
                        <FaArrowRight className='h-[46px] w-[46px] bg-[#d8d4d4] text-black rounded-full p-3 hover:cursor-pointer' />
                    </div>
                </div>

                {/* This month section card */}
                <div className='flex justify-evenly'>
                    {/* Card 1 of this month section */}
                    <div className='hover:cursor-pointer'>
                        <div className='flex justify-end w-[190px]'><div>
                            <FaRegHeart className='text-xl' />
                            <FaRegEye className='text-xl' />
                        </div>
                        </div>
                        <Image src={"/Frame 605.png"} width={"190"} height={"180"} alt=''>
                        </Image>
                        <p className='font-bold'>Gucci duffle bag </p>
                        <p className='text-[#DB4444]'>$960 <span className='text-black line-through'>$1160</span></p>
                        <div className='flex items-center'>
                            <IoMdStar className='text-[#FFAD33]' />
                            <IoMdStar className='text-[#FFAD33]' />
                            <IoMdStar className='text-[#FFAD33]' />
                            <IoMdStar className='text-[#FFAD33]' />
                            <IoStarHalf className='text-[#FFAD33]' />
                            <p className='font-light'>(65)</p>
                        </div>
                    </div>
                    {/* Card 2 of this month section */}
                    <div className='hover:cursor-pointer'>
                        <div className='flex justify-end w-[190px]'><div>
                            <FaRegHeart className='text-xl' />
                            <FaRegEye className='text-xl' />
                        </div>
                        </div>
                        <Image src={"/Frame 606.png"} width={"190"} height={"180"} alt=''>
                        </Image>
                        <p className='font-bold'>The North Coat </p>
                        <p className='text-[#DB4444]'>$260 <span className='text-black line-through'>$360</span></p>
                        <div className='flex items-center'>
                            <IoMdStar className='text-[#FFAD33]' />
                            <IoMdStar className='text-[#FFAD33]' />
                            <IoMdStar className='text-[#FFAD33]' />
                            <IoMdStar className='text-[#FFAD33]' />
                            <IoStarHalf className='text-[#FFAD33]' />
                            <p className='font-light'>(65)</p>
                        </div>
                    </div>
                    {/* Card 3 of this month section */}
                    <div className='hover:cursor-pointer'>
                        <div className='flex justify-end w-[190px]'><div>
                            <FaRegHeart className='text-xl' />
                            <FaRegEye className='text-xl' />
                        </div>
                        </div>
                        <Image src={"/Frame 610.png"} width={"190"} height={"180"} alt=''>
                        </Image>
                        <p className='font-bold'>RGB liquid CPU Cooler </p>
                        <p className='text-[#DB4444]'>$160 <span className='text-black line-through'>$170</span></p>
                        <div className='flex items-center'>
                            <IoMdStar className='text-[#FFAD33]' />
                            <IoMdStar className='text-[#FFAD33]' />
                            <IoMdStar className='text-[#FFAD33]' />
                            <IoMdStar className='text-[#FFAD33]' />
                            <IoStarHalf className='text-[#FFAD33]' />
                            <p className='font-light'>(65)</p>
                        </div>
                    </div>
                    {/* Card 4 of this month section */}
                    <div className='hover:cursor-pointer'>
                        <div className='flex justify-end w-[190px]'><div>
                            <FaRegHeart className='text-xl' />
                            <FaRegEye className='text-xl' />
                        </div>
                        </div>
                        <Image src={"/Frame 600.png"} width={"190"} height={"180"} alt=''>
                        </Image>
                        <p className='font-bold'>Small BookSelf </p>
                        <p className='text-[#DB4444]'>$360</p>
                        <div className='flex items-center'>
                            <IoMdStar className='text-[#FFAD33]' />
                            <IoMdStar className='text-[#FFAD33]' />
                            <IoMdStar className='text-[#FFAD33]' />
                            <IoMdStar className='text-[#FFAD33]' />
                            <IoMdStar className='text-[#FFAD33]' />
                            <p className='font-light'>(65)</p>
                        </div>
                    </div>
                </div>
                {/* Banner Image of Categories  */}
                <div>
                    <Image src={"/Frame 500.png"} width={1170} height={500} alt=''></Image>
                </div>



                {/* Our products section heading */}
                <div className='flex gap-2 items-center'>
                    <div className='bg-[#DB4444] h-[40px] w-[20px] rounded-md'>

                    </div>
                    <h1 className='text-[#DB4444] font-bold text-[20px]'>Our Products</h1>
                </div>
                <div className='flex items-center justify-between py-2'>
                    <div>
                        <h1 className='text-3xl font-bold'>Explore Our Products</h1>
                    </div>
                    <div className='flex gap-1'>
                        <FaArrowLeft className='h-[46px] w-[46px] bg-[#d8d4d4] text-black rounded-full p-3 hover:cursor-pointer' />
                        <FaArrowRight className='h-[46px] w-[46px] bg-[#d8d4d4] text-black rounded-full p-3 hover:cursor-pointer' />
                    </div>
                </div>



                {/* Our Product Section Card */}
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
                {/* Card 5 */}
                <div className='hover:cursor-pointer'>
                    <div className='flex justify-end w-[190px]'>                                <div>
                        <FaRegHeart className='text-xl' />
                        <FaRegEye className='text-xl' />
                    </div>
                    </div>
                    <Image className='py-2' src={"/Frame 608.png"} width={"190"} height={"180"} alt=''>
                    </Image>
                    <p className='font-bold'>Kids Electric Car </p>
                    <div className='flex'>
                        <div>
                            <p className='text-[#DB4444]'>$960</p>
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
                {/* Card 6 */}
                <div className='hover:cursor-pointer'>
                    <div className='flex justify-end w-[190px]'>                                <div>
                        <FaRegHeart className='text-xl' />
                        <FaRegEye className='text-xl' />
                    </div>
                    </div>
                    <Image className='py-2' src={"/kjkjkj.png"} width={"190"} height={"180"} alt=''>
                    </Image>
                    <p className='font-bold'>Jr. Zoom Soccer Cleats </p>
                    <div className='flex'>
                        <div>
                            <p className='text-[#DB4444]'>$1100</p>
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
                {/* Card 7 */}
                <div className='hover:cursor-pointer'>
                    <div className='flex justify-end w-[190px]'>                                <div>
                        <FaRegHeart className='text-xl' />
                        <FaRegEye className='text-xl' />
                    </div>
                    </div>
                    <Image className='py-2' src={"/jj.png"} width={"190"} height={"180"} alt=''>
                    </Image>
                    <p className='font-bold'>GP11 Shooter USB Gamepad</p>
                    <div className='flex'>
                        <div>
                            <p className='text-[#DB4444]'>$660</p>
                        </div>
                        <div className='flex items-center'>
                            <IoMdStar className='text-[#FFAD33]' />
                            <IoMdStar className='text-[#FFAD33]' />
                            <IoMdStar className='text-[#FFAD33]' />
                            <IoMdStar className='text-[#FFAD33]' />
                            <IoStarHalf className='text-[#FFAD33]' />
                            <p className='font-light'>(55)</p>
                        </div>
                    </div>
                </div>
                {/* Card 8 */}
                <div className='hover:cursor-pointer'>
                    <div className='flex justify-end w-[190px]'>                                <div>
                        <FaRegHeart className='text-xl' />
                        <FaRegEye className='text-xl' />
                    </div>
                    </div>
                    <Image className='py-2' src={"/hh.png"} width={"190"} height={"180"} alt=''>
                    </Image>
                    <p className='font-bold'>Quilted Satin Jacket </p>
                    <div className='flex'>
                        <div>
                            <p className='text-[#DB4444]'>$660</p>
                        </div>
                        <div className='flex items-center'>
                            <IoMdStar className='text-[#FFAD33]' />
                            <IoMdStar className='text-[#FFAD33]' />
                            <IoMdStar className='text-[#FFAD33]' />
                            <IoMdStar className='text-[#FFAD33]' />
                            <IoStarHalf className='text-[#FFAD33]' />
                            <p className='font-light'>(55)</p>
                        </div>
                    </div>
                </div>
                </div>





                {/* Featured Section heading */}
                 <div className='flex gap-2 items-center'>
                    <div className='bg-[#DB4444] h-[40px] w-[20px] rounded-md'>

                    </div>
                    <h1 className='text-[#DB4444] font-bold text-[20px]'>Featured</h1>
                </div>
                <div className='flex items-center justify-between py-2'>
                    <div>
                        <h1 className='text-3xl font-bold'>New Arrival</h1>
                    </div>
                    <div className='flex gap-1'>
                        <FaArrowLeft className='h-[46px] w-[46px] bg-[#d8d4d4] text-black rounded-full p-3 hover:cursor-pointer' />
                        <FaArrowRight className='h-[46px] w-[46px] bg-[#d8d4d4] text-black rounded-full p-3 hover:cursor-pointer' />
                    </div>
                </div>
                <div>
                    <Image src={"/Frame 739.png"} width={1170} height={600} alt=''></Image>
                </div>





                {/* Services Section */}
                <div className='flex justify-around'>
                    <div className='flex flex-col items-center gap-2'>
                        <Image src={"/ser1.png"} width={80} height={80} alt=''></Image>
                        <h1 className='text-xl font-bold'>FREE AND FAST DELIVERY</h1>
                        <p className='text-[16px]'>Free delivery for all orders over $140</p>
                    </div>
                    <div className='flex flex-col items-center gap-2'>
                        <Image src={"/ser1.png"} width={80} height={80} alt=''></Image>
                        <h1 className='text-xl font-bold'>24/7 CUSTOMER SERVICE</h1>
                        <p className='text-[16px]'>Friendly 24/7 customer support</p>
                    </div>
                    <div className='flex flex-col items-center gap-2'>
                        <Image src={"/ser1.png"} width={80} height={80} alt=''></Image>
                        <h1 className='text-xl font-bold'>MONEY BACK GUARANTEE</h1>
                        <p className='text-[16px]'>We return money within 30 days</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Hero;





