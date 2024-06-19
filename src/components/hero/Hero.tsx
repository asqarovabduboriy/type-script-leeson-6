import React from 'react'
import './Hero.css'
import img1 from '../../assets/imgs/fresh-sweet-basil-leaves-isolated-white-background 1.png'
import img2 from '../../assets/imgs/fresh-sweet-basil-leaves-isolated-white-background 2.png'
import img3 from '../../assets/imgs/fresh-sweet-basil-leaves-isolated-white-background 4.png'

const Hero: React.FC   = () => {
  return (
  <>
    <div className="container">
         <div className='bg_clor'>
            <img className='img1' src={img1} alt="" />
            <img className='img2  ' src={img2} alt="" />
            <img className='img3' src={img3} alt="" />
               <div className='Text'>
              <h1>Who we are and what we do</h1>
              <p>Here you can find a lot of interesting and useful information that you need in gardening and creating a beautiful garden</p>
               </div>
        </div>     
 </div> 
  </>
)
}

export default Hero