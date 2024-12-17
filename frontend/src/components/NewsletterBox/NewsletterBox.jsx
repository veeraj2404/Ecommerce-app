import React from 'react'

export default function NewsletterBox() {

    const onSubmitHandler = (event) => {
        event.preventDefault();
    }

    return (
        <div className="text-center">
            <p className="text-2xl font-medium text-gray-800">Subsribe now & get 20% off</p>
            <p className='text-gray-400 mt-3'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima alias iusto incidunt.
            </p>
            <form onClick={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
                <input type="email" className='w-full sm:flex-1 outline-none' placeholder='Enter your email' />
                <button type='submit' className='bg-black text-white text-xs px-10 py-4'>SUBSCRIBE</button>
            </form>
        </div>
    )
}
