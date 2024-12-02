import React, { useState } from 'react'
import BGImg from '../../assets/homebg.jpg'
import Logo from '../../assets/growlogo.png'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/phoneotp');
  };

  return (
    <div className="flex items-center justify-center h-screen bg-blue-100 bg-cover bg-center" style={{ backgroundImage: `url(${BGImg})` }}>
      <div className="card mt-5 w-96 bg-white shadow-xl">
        <div className="card-body items-center text-center">
          <img src={Logo} className="w-12 h-12" alt="" />
          <h2 className="text-2xl font-bold">Grow your Business Exponentially!</h2>
          <p className='text-sm text-[#868C9A] mt-1 px-12'>Pay less on each transaction you make with our App.</p>
          <ul className="flex space-x-1 my-1">
            <li className="step"><input type="radio" name="radio-1" className="radio appearance-none w-3 h-3 border-1 border-gray-400 rounded-full checked:w-6 checked:h-6 checked:bg-black checked:border-none transition-all duration-200" defaultChecked /></li>
            <li className="step"><input type="radio" name="radio-1" className="radio appearance-none w-3 h-3 border-1 border-gray-400 rounded-full checked:w-6 checked:h-6 checked:bg-black checked:border-none transition-all duration-200" /></li>
            <li className="step"><input type="radio" name="radio-1" className="radio appearance-none w-3 h-3 border-1 border-gray-400 rounded-full checked:w-6 checked:h-6 checked:bg-black checked:border-none transition-all duration-200" /></li>
          </ul>
          <div className="w-full">
            <button className="w-full text-base btn
                   text-[#ACC43F] text-[#668D12]
                   hover:bg-gradient-to-r from-[#668D12] to-[#ACC43F]  
                   hover:border-[#ACC43F] border-[#668D12]
                   hover:text-white"
              onClick={handleLogin}>
              Login
            </button>
            <button className="mt-2 w-full text-base btn
                   text-[#ACC43F] text-[#668D12]
                   hover:bg-gradient-to-r from-[#668D12] to-[#ACC43F]  
                   hover:border-[#ACC43F] border-[#668D12]
                   hover:text-white">
              Contact Us
            </button>
          </div>
          <div className="mx-12 my-1">
            <p className='text-xs text-gray-500'>By clicking, you agree to our <span className='text-black font-normal'>Terms & Conditions</span> and <span className=''> Privacy Policy.</span></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login