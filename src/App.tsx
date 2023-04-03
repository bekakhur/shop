import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Navbar from './components/Navbar';
import { Men } from './pages/Men';
import { Home } from './pages/Home';
import { Women } from './pages/Women';
import { Jewelery } from './pages/Jewelery';
import { Electronics } from './pages/Electronics';
import { Cart } from './pages/Cart';
import { WishList } from './pages/WishList'
import {Singlepage} from './pages/Singlepage'
import Checker from './pages/Checker';
import { ShoppingCartProvider } from './context/ShoppingCartContext';
import AnimatedRoutes from './components/AnimatedRoutes';

const url = 'https://fakestoreapi.com/products'


function App() {
  const [items, setItems] = useState<any>([])
  const [homed, setHomed] = useState<any>([])

  useEffect(() => {
      axios.get(
                      process.env.REACT_APP_API_URL + "/products?populate=*",
               {
                   headers: {
                       Authorization: "bearer " + process.env.REACT_APP_API_TOKEN,
                   },
               }
      ).then((res) => {
        setHomed(res.data.data)
      })        
    }, [])
    console.log(homed)

  return (
    <ShoppingCartProvider>
      <Navbar />
      <div className='min-h-screen pt-[80px]'>
      <AnimatedRoutes strap={homed} />
      {/* <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/women" element={<Women itemsprops={items} />} />          
          <Route path="/men" element={<Men strap={homed}/>} />         
          <Route path="/jewelery" element={<Jewelery itemsprops={items} />} />
          <Route path="/electronics" element={<Electronics itemsprops={items} />} />
          <Route path="/cart" element={<Cart strap={homed}/>} />
          <Route path='/:id' element={<Singlepage strap={homed}/>}/>
          <Route path="/checkout" element={<Checker />}/>
      </Routes>      */}
      </div>
      <div className='h-[100px] w-full bg-zinc-400 text-center shadow-inner'><h2 className='pt-16'>© Copyright 2022 BRAND UK Limited. All rights reserved.</h2></div>
    </ShoppingCartProvider>
  );
}

export default App;
