import React from 'react'
import Image from 'next/image'
const Cart = () => {
    return (
        <div className='py-12'>
            <div className='flex flex-col gap-10'>
                <ul className='flex justify-evenly'>
                    <li>Product</li>
                    <li>Price</li>
                    <li>Quantity</li>
                    <li>Subtotal</li>
                </ul>
                <div className='flex justify-evenly'>
                    <div className='flex items-center gap-2'>
                        <Image src={"/screen.jpeg"} width={50} height={50} alt='' />
                        <h1>LCD Monitor</h1>
                    </div>
                    <p>$650</p>
                    <input type="text" placeholder='01' className='border border-gray-500 w-12 h-8 rounded-md px-2' />
                    <p>$650</p>
                </div>
                <div className='flex justify-evenly'>
                    <div className='flex items-center gap-2'>
                        <Image src={"/screen.jpeg"} width={50} height={50} alt='' />
                        <h1>H1 GamePad</h1>
                    </div>
                    <p>$550</p>
                    <input type="text" placeholder='01' className='border border-gray-500 w-12 h-8 rounded-md px-2' />
                    <p>$1100</p>
                </div>
                <div className='flex justify-around'>
                    <button className='w-[223px] h-[56px] px-2 py-2 border border-gray-500'>Return To Shop</button>
                    <button className='w-[223px] h-[56px] px-2 py-2 border border-gray-500'>Update Cart</button>
                </div>
            </div>


            {/* {"Apply coupon and card total section"} */}
            <div className='grid grid-cols-2 px-16 py-12'>
                <div className='flex gap-2'>
                    <input type="text" placeholder='Coupon Code' className='border border-gray-500 px-2 py-2 w-[200px] h-[56px]' />
                    <button className='w-[150px] h-[56px] px-2 py-2 border  bg-[#DB4444] text-white'>Apply Coupon</button>
                </div>
                {/* Cart Total Card */}
                <div className='border border-gray-500 px-4 py-4 flex flex-col gap-4'>
                    <h1>Cart Total</h1>
                    <div className='flex justify-between'>
                        <p className='font-light'>Subtotal</p>
                        <p className='font-light'>$1750</p>
                    </div>
                    <div className='border-b-2 border-gray-300'></div>
                    <div className='flex justify-between'>
                        <p className='font-light'>Shipping</p>
                        <p className='font-light'>Free</p>
                    </div>
                    <div className='border-b-2 border-gray-300'></div>
                    <div className='flex justify-between'>
                        <p className='font-light'>Total</p>
                        <p className='font-light'>$1750</p>
                    </div>
                    <div className='border-b-2 border-gray-300'></div>
                    <div className='flex justify-center'>
                        <button className='w-[223px] h-[56px] px-2 py-2 border bg-[#DB4444] text-white'>Proceed To Checkout</button>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Cart
