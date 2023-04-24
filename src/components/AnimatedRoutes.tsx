import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Home } from '../pages/Home'
import { WishList } from '../pages/WishList'
import {AnimatePresence, motion} from 'framer-motion'
import Checker from '../pages/Checker'
import { Strapi } from '../types'
import { Men } from '../pages/Men'
import { Cart } from '../pages/Cart'
import { Singlepage } from '../pages/Singlepage'

const AnimatedRoutes = ({strap}: Strapi) => {
    const location = useLocation()

  return (
    <div>
        <AnimatePresence mode='wait'>
            < Routes location={location} key={location.pathname}>
                <Route path="/shop" element={<Home />} />
                <Route path="/wishlist" element={<WishList strap={strap}  />} />
                <Route path="/checkout" element={<Checker />}/>
                <Route path="/men" element={ <Men strap={strap} />} />
                <Route path="cart/" element={<Cart strap={strap}/>} />
                <Route path='/:id' element={<Singlepage strap={strap}/>}/>
            </Routes>
        </AnimatePresence>
    </div>
  )
}

export default AnimatedRoutes