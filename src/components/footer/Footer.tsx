import React from 'react'
import logo from '../../assets/imgs/Frame.svg'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
const Footer: React.FC = () => {
  return (
    <>
      <footer>
        <div className="container">
         <div className="flex_div">
         <ul>
                <li>ALL PRODUCTS</li>
                <li>ABOUT SEEDRA</li> 
                <li>OUR BLOG</li>
                <img src={logo} alt="" />
                <li>Privacy Policy</li>
                <li>CONTACTS</li>
            </ul>
         </div>
         <div className='line'></div>
         <div className="icons_footer">
           <div>
           <FaFacebook />
           <FaInstagram />
           </div>
            <div className="text_footer">
                <p>All rights reserved</p>
            </div>
         </div>
        </div>
      </footer>
    </>
  )
}

export default Footer