import React from 'react'
import './Main.css'
import img1 from '../../assets/imgs/Ellipse 3.png'
import img2 from '../../assets/imgs/Ellipse 2.png'
import img3 from '../../assets/imgs/Rectangle 5.png'

const Main: React.FC = () => {
  return (
   <>
     <div className="container">
        <div className='flex_div'>
           <div className='text_main'>
              <h2>Seedra helps to grow fast and efficiant</h2>
              <p>SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and professional instructions created by PhD Helga George</p>
              <p>Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the best germination ratings. </p>
              <p>Spinach commom culinary uses: salads, soups, smoothies, lasagne, pizza, pies, risotto, and more</p>
              <p>  Proudly sourced in the USA - our garden seeds are grown, harvested, and packaged in the USA. We support local farmers and are happy to produce this American-made product</p>
           </div>
           <div className='img_wrapper'>
             <img src={img1} alt="" />
             <img className='img_one' src={img2} alt="" />
           </div>
        </div>
        <div className="flex_div">
            <div className='img_warppers'>
             <img src={img3} alt="" />
            </div>

            <div className='text_main'>
              <h2>Our story</h2>
              <p>SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and professional instructions created by PhD Helga George</p>
              <p>Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the best germination ratings. </p>
              <p>Spinach commom culinary uses: salads, soups, smoothies, lasagne, pizza, pies, risotto, and more</p>
              <p>  Proudly sourced in the USA - our garden seeds are grown, harvested, and packaged in the USA. We support local farmers and are happy to produce this American-made product</p>
           </div>
        </div>
     </div>
   </>
  )
}

export default Main