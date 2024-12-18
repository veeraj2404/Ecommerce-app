import React from 'react'
import Title from '../../components/Title/Title'
import { assets } from '../../assets/assets'
import NewsletterBox from '../../components/NewsletterBox/NewsletterBox'

export default function About() {
    return (
        <div>

            <div className="text2xl text-center pt-8 border-t">
                <Title text1={'ABOUT'} text2={'US'} />
            </div>

            <div className="my-10 flex flex-col md:flex-row gap-16">
                <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
                <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum debitis facere harum, illo esse obcaecati quasi nihil temporibus quisquam ad impedit, fugit excepturi suscipit numquam itaque. Eaque blanditiis omnis, accusantium dolores delectus consequuntur doloremque perspiciatis nisi iure illum dolore esse voluptate quas dolorum eligendi, earum totam nobis ea minima quam?</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid exercitationem minus rerum quod quasi suscipit dicta consequatur, nostrum voluptas voluptatibus esse asperiores, qui, nobis veniam impedit eos. Ullam, velit consequatur!</p>
                    <b className='text-gray-800'>Our Mission</b>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem deleniti asperiores aspernatur nam, repudiandae nobis, soluta voluptas sit facilis laborum at perferendis tempora modi consectetur?</p>
                </div>
            </div>

            <div className="text-4xl py-4">
                <Title text1={'WHY'} text2={'CHOOSE US'} />
            </div>

            <div className="flex flex-col md:flex-row text-sm mb-20">
                <div className="border px-10 md:px-16 py-8- sm:py-20 flex flex-col gap-5">
                    <b>Quality Assurance:</b>
                    <p className='text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus est voluptates nihil officiis? Sequi necessitatibus magni veritatis perferendis consequatur odio!</p>
                </div>
                <div className="border px-10 md:px-16 py-8- sm:py-20 flex flex-col gap-5">
                    <b>Convenience:</b>
                    <p className='text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus est voluptates nihil officiis? Sequi necessitatibus magni veritatis perferendis consequatur odio!</p>
                </div>
                <div className="border px-10 md:px-16 py-8- sm:py-20 flex flex-col gap-5">
                    <b>Exceptional Customer Service:</b>
                    <p className='text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus est voluptates nihil officiis? Sequi necessitatibus magni veritatis perferendis consequatur odio!</p>
                </div>
            </div>

            <NewsletterBox/>
        </div>
    )
}
