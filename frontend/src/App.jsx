import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'

import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Collection from './pages/Collection/Collection'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Product from './pages/Product/Product'
import Cart from './pages/Cart/Cart'
import Login from './pages/Login/Login'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Orders from './pages/Orders/Orders'
import Footer from './components/Footer/Footer'
import SearchBar from './components/SearchBar/SearchBar'

export default function App() {
    return (
        <div className='px-4 sm:px-[5vm] md:px=[7vw] lg:px-[9vm]'>
            <Navbar/>
            <SearchBar/>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/collection' element={<Collection />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/product/:product' element={<Product />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/login' element={<Login />} />
                <Route path='/place-order' element={<PlaceOrder />} />
                <Route path='/orders' element={<Orders />} />
            </Routes>
            <Footer/>
        </div>
    )
}
