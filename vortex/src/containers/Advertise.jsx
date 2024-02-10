import React from 'react'
import './Advertise.css'
import ad1 from '../assets/ad1.jpg'
  import ad2 from '../assets/ad2.jpg'
  import ad3 from '../assets/ad3.jpg'
  import ad4 from '../assets/ad4.jpg'
  import ad5 from '../assets/ad5.jpg'
  import ad6 from '../assets/ad6.jpg'
  


function Advertise() {
  
  return (
    <>
    <div className="A-main">
      <div className="Ad-container">
          <div className="ad-words"><span className="no">Advertise on Unsplash</span>
          <p/><button class="cta">
  <span>Get in Touch with us</span>
  <svg width="15px" height="10px" viewBox="0 0 13 10">
    <path d="M1,5 L11,5"></path>
    <polyline points="8 1 12 5 8 9"></polyline>
  </svg>
</button>
          </div>
     
          <div className="ad-image">
            
          <img className="photo1" src={ad1} alt="" />
          <img className="photo2"src={ad2} alt="" />
          <img className="photo3"src={ad3} alt="" />
          <img className="photo4" src={ad4} alt="" />
          <img className="photo5" src={ad5} alt="" />
          <img className="photo6" src={ad6} alt="" />


          </div>
          </div>

          
      </div>

    </>
  )
}

export default Advertise