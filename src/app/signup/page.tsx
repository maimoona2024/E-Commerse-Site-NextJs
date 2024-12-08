import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

const SignUp = () => {
    return (
        <div className='px-10 py-20'>
            <div className='grid grid-cols-[1fr_2fr] gap-20'>
                {/* Left Side */}
                <div className='flex flex-col gap-6'>
                    <div className='flex gap-4 items-center'>
                        <div className='bg-[#DB4444] rounded-full p-2'>
                        <FaPhoneAlt className=' text-white'/>
                        </div>
                    <p>Call To Us</p>
                    </div>
                    <p>We are available 24/7, 7 days a week.</p>
                    <p>Phone: +8801611112222</p>
                    <div className='border-b-2 border-gray-300'></div>
                    <div className='flex gap-4 items-center'>
                        <div className='bg-[#DB4444] rounded-full p-2'>
                        <MdOutlineMailOutline className=' text-white'/>
                        </div>
                    <p>Write To US</p>
                    </div>
                    <p>Fill out our form and we will contact you within 24 hours.</p>
                    <p>Emails: customer@exclusive.com</p>
                    <p>Emails: support@exclusive.com</p>
                    <div className='border-b-2 border-gray-300'></div>
                </div>
                {/* Right Side */}
                <div className='flex flex-col gap-2'>
                    <div className='flex gap-2'>
                        <input type="text" placeholder='Your Name' className='bg-gray-200 rounded-md px-2 py-2 w-48'/>
                        <input type="text" placeholder='Your E-mail' className='bg-gray-200 rounded-md px-2 py-2 w-48'/>
                        <input type="text" placeholder='Your Phone' className='bg-gray-200 rounded-md px-2 py-2 w-48'/>
                    </div>
                    <div>
                        <textarea placeholder='Your Message' rows={10} className='w-[590px] bg-gray-200 rounded-md px-2 py-2'></textarea>
                    </div>
                    <div className='flex justify-items-end'>
                        <button className='w-[223px] h-[56px] px-2 py-2 border bg-[#DB4444] text-white'>Proceed To Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp
