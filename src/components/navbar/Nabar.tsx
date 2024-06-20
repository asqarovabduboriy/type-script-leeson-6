import React, { useState } from 'react'
import './Nabar.css'
import logo from '../../assets/imgs/Frame.svg'
import { FaFacebook, FaInstagram, FaShoppingCart } from 'react-icons/fa'
import { CiHeart } from 'react-icons/ci'
import Contac from '../contact/Contac'

const Nabar: React.FC = () => {
  const [show, setShow] = useState(false)
  return (
    <>
       <header>
        <div className="container navbar">
            <div className='logo'>
                    <img  src={logo} alt=""  />
            </div>
            <ul>
                <li>ALL PRODUCTS</li>
                <li>ABOUT SEEDRA</li>
                <li>OUR BLOG</li>
                <li onClick={() => setShow(p=>!p)}>CONTACTS</li>
            </ul>

            {
   
                   show? <Contac/> : null

            }
            <div className='icons'>
               <FaInstagram/>
               <FaFacebook/>
            </div>
            <div className='search'>
               <input type="text" placeholder='Search...' />
               <button>Search</button>
            </div>
            <div className='cart_like '>
                <CiHeart/>
                <FaShoppingCart/>
            </div>
        </div>
       </header>
    </>
  )
}

export default Nabar