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

    <section className="px-2">
      <div className="mx-auto max-w-7xl py-10">
        <div>
          <div className="max-w-2xl">
            <h1 className="text-2xl font-bold text-black">Frequently Asked Questions</h1>
            <p className="mt-4 text-sm leading-6 tracking-wide text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="rounded-md border border-black/30 p-6">
                <dt className="text-lg font-semibold leading-6 text-gray-900">
                  How do I get started?
                </dt>
                <dd className="mt-2 text-sm text-gray-500">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. In, et? Obcaecati, nemo
                  sit. Delectus, totam obcaecati aliquid omnis cumque ex.
                </dd>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>


    </div>
    </>
    
  )
}

export default Premium