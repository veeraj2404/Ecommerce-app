import React from 'react'
import Hero from '../../components/Hero/Hero'
import LatestCollection from '../../components/LatestCollection/LatestCollection'
import BestSeller from '../../components/BestSeller/BestSeller'
import OurPolicy from '../../components/OurPolicy/OurPolicy'
import NewsletterBox from '../../components/NewsletterBox/NewsletterBox'

export default function Home() {
    return (
        <div>
            <Hero/>
            <LatestCollection/>
            <BestSeller/>
            <OurPolicy/>
            <NewsletterBox/>
        </div>
    )
}
