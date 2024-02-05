import React,{useState} from 'react'
import { Link } from "react-router-dom";
import './Premium.css'
import tick from '../assets/tick.svg'
import gif from '../assets/cool.gif'

function Premium() {
  const [faqVisible, setFaqVisible] = useState(false);
  const [faq2Visible, setFaq2Visible] = useState(false);
  const [faq3Visible, setFaq3Visible] = useState(false);
  const [faq4Visible, setFaq4Visible] = useState(false);
  const [faq5Visible, setFaq5Visible] = useState(false);




  const toggleFaq = () => {
    setFaqVisible(!faqVisible); 
  
  };
  const toggleFaq2 = () => {
    setFaq2Visible(!faq2Visible);
  };
  const toggleFaq3 = () => {
    setFaq3Visible(!faq3Visible);
  };
  const toggleFaq4 = () => {
    setFaq4Visible(!faq4Visible);
  };
  const toggleFaq5 = () => {
    setFaq5Visible(!faq5Visible);
  };
  return (
    <>
    <h3>Vortex</h3>
    <div className='p-main'>
      <h2> Upgrade to Vortex and start creating with exclusive, royalty-free images.
</h2>
<div className="card">
      <p className="price">$ 251</p>
      <ul className="lists">
        <li className="list">
        <img src={tick} alt="" />
          
          <span> Ad Free </span>
        </li>
        <li className="list">
        <img src={tick} alt="" />
          
          <span>No ADS </span>
        </li>
        <li className="list">
        <img src={tick} alt="" />
          
          <span> Unlimited photos Download </span>
        </li>
        <li className="list">
        <img src={tick} alt="" />
          
          <span>  24/7 Support </span>
        </li>
        <li className="list">
        <img src={tick} alt="" />
          
          <span> Export up to 12 months data </span>
        </li>
        <li className="list">
        <img src={tick} alt="" />
         
          <span> Cloud service 24/7 </span>
        </li>
      </ul>
      <a href="#" className="action">
        Get started
      </a>
    </div>

    <div className="animated-gif">
    <img src={gif} alt="animated"></img>
    </div>
    <hr/>

    <div className='faq-vortex'>
        <div className='headig-of-faq' >
          FAQ
        </div>

        <div className='first-que' onClick={toggleFaq}>what is vortex ?</div>
        {faqVisible && (
          <div className={`faq-answer ${faqVisible ? 'visible' : ''}`}>
            <span>Vortex revolutionizes content aggregation, offering a centralized platform using APIs for seamless access to 
diverse data sources. It provides a user-friendly interface with advanced features like keyword management, 
content moderation, and versatile search options, simplifying the process of discovering and utilizing high-quality 
images. Through API integration, Vortex ensures a rich image pool, catering to students, designers, businesses, 
and content creators.</span>
            
          </div>
        )}

      </div>
      <div className='second-que' onClick={toggleFaq2}>How do I sign up for a vortex subscription?</div>
        {faq2Visible && (
          <div className={`faq-answer ${faq2Visible ? 'visible' : ''}`}>
            <span>To upgrade to Premium, simply click on the "Get started" button on our Premium page. Follow the prompts to complete the subscription process and unlock exclusive features.</span>     
          </div>
        )}

<div className='third-que' onClick={toggleFaq3}>What does "Ad-Free" mean in the Premium subscription?</div>
        {faq3Visible && (
          <div className={`faq-answer ${faq3Visible ? 'visible' : ''}`}>
            <span>With Premium, you won't encounter any advertisements while using our platform, ensuring a more immersive and enjoyable user experience.</span>
            
          </div>
        )}

<div className='fourth-que' onClick={toggleFaq4}>Are there any limitations on downloading photos with the Premium subscription?</div>
        {faq4Visible && (
          <div className={`faq-answer ${faq4Visible ? 'visible' : ''}`}>
            <span>Premium subscribers can enjoy unlimited photo downloads, allowing you to access and use a vast library of high-quality images without any restrictions.</span>
            
          </div>
        )}

<div className='fifth-que' onClick={toggleFaq5}>Is customer support available for Premium subscribers?</div>
        {faq5Visible && (
          <div className={`faq-answer ${faq5Visible ? 'visible' : ''}`}>
            <span>Yes, Premium subscribers benefit from 24/7 customer support. Our dedicated support team is ready to assist you with any queries or issues you may encounter.</span>
            
          </div>
        )}

<hr className="horizontal"/>

<div className="user-policy-links">
  <div className="privacy-link">
  <Link to="/" className="pl">Privacy Policy</Link>
  </div>
  <div className="Terms-link">
  <Link to="/" className="pl">Terms</Link>
  </div>
  
</div>
    </div>
    </>
    
  )
}

export default Premium