import React from 'react'
import './Nabar.css'
import logo from '../../assets/imgs/Frame.svg'
import { FaFacebook, FaInstagram, FaShoppingCart } from 'react-icons/fa'
import { CiHeart } from 'react-icons/ci'

const Nabar: React.FC = () => {
  return (
    <>
       <header>
        <div className="container navbar">
            <div className='logo'>
                    <img  src={logo} alt=""  />
            </div>
            <ul>
                <li>Home</li>
                <li>Shop</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
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