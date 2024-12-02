import React, { useState } from 'react'
import BGImg from '../../assets/homebg.jpg'
import StoreImg from '../../assets/storeimg.png'
import { useNavigate } from 'react-router-dom';
import { IoArrowBack } from "react-icons/io5";

const SelectStore = () => {

  const [selectedCard, setSelectedCard] = useState(null);
  const navigate = useNavigate()

  const cards = [
    { id: 1, img: StoreImg, title: "Annapoorna Hotel", description: "Sitra, Coimbatore", storeid: "Store ID: 12345" },
    { id: 2, img: StoreImg, title: "Sweety Hotel", description: "L&T, Chennai", storeid: "Store ID: 34567" },
    { id: 3, img: StoreImg, title: "Aahaa Hotel", description: "Chitra, Maduari", storeid: "Store ID: 87654" },
    { id: 4, img: StoreImg, title: "Amullu Hotel", description: "Devi, Trichy", storeid: "Store ID: 90876" },
    { id: 5, img: StoreImg, title: "Kuppan Hotel", description: "Swamy, Theni", storeid: "Store ID: 28740" },
  ];

  const handleSelection = (id) => {
    setSelectedCard(id);
  };

  const handleContinue = () => {
    navigate('/dashboard')
  }

  return (
    <div className="flex items-center justify-center h-screen bg-blue-100 bg-cover bg-center" style={{ backgroundImage: `url(${BGImg})` }}>
      <div className="card mt-5 w-96 rounded bg-white shadow-xl">
        <div className="flex items-center justify-start mt-5 px-10">
          <IoArrowBack />
        </div>
        <div className="card-body items-center text-center">
          <h2 className="text-2xl font-bold">Select Your Store</h2>
          <p className='text-sm text-[#868C9A] mt-1 px-12 text-nowrap'>Your Number is connect with 2 stores</p>
          <div className="p-4">
            {/* Scrollable Container */}
            <div className="h-[200px] overflow-y-scroll rounded-lg p-2 shadow-sm bg-white scrollbar-hide">
              {cards.map((card) => (
                <div
                  key={card.id}
                  className={`p-4 border rounded-lg shadow-sm cursor-pointer flex items-center justify-between ${selectedCard === card.id
                    ? "bg-blue-100 border-blue-500"
                    : "bg-white border-gray-300"
                    }`}
                  onClick={() => handleSelection(card.id)}
                >
                  <div className='flex px-2 items-center'>
                    <div>
                      <img src={card.img} alt="Store Image" className="w-12 h-12" />
                    </div>
                    <div className="mx-4 text-left">
                      <h3 className="text-sm font-bold">{card.title}</h3>
                      <p className="text-sm text-gray-600">{card.description}</p>
                      <p className="text-sm text-gray-600">{card.storeid}</p>
                    </div>
                  </div>
                  <input
                    type="radio"
                    name="card"
                    value={card.id}
                    checked={selectedCard === card.id}
                    onChange={() => handleSelection(card.id)}
                    className="form-radio h-5 w-5 text-blue-500"
                  />
                </div>
              ))}
            </div>
            <div className='mt-6'>
              <button className="w-full text-base btn
                   text-[#ACC43F] text-[#668D12]
                   hover:bg-gradient-to-r from-[#668D12] to-[#ACC43F]  
                   hover:border-[#ACC43F] border-[#668D12]
                   hover:text-white"
                onClick={handleContinue}>
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SelectStore