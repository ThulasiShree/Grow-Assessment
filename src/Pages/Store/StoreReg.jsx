import React from 'react'
import StoreIcon from '../../assets/storeicon.png'
import BGImg from '../../assets/homebg.jpg'
import { useNavigate } from 'react-router-dom'

const StoreReg = () => {

    const navigate = useNavigate();

    const handleStore = () => {
        navigate('/selectstore');
    }

    return (
        <div className="flex items-center justify-center h-screen bg-blue-100 bg-cover bg-center" style={{ backgroundImage: `url(${BGImg})` }}>
            <div className="card mt-5 w-96 bg-white shadow-xl">
                <div className="card-body items-center text-center">
                    <img src={StoreIcon} className="w-30 h-24" alt="" />
                    <h2 className="text-3xl px-2 font-bold">No stores are linked to this account</h2>
                    <p className='text-sm text-[#868C9A] mt-1 px-12'>Enter your account details correctly or register your store with us</p>
                    <div className="w-full mt-12">
                        <button className="w-full text-base btn
                 text-[#ACC43F] text-[#668D12]
                 hover:bg-gradient-to-r from-[#668D12] to-[#ACC43F]  
                 hover:border-[#ACC43F] border-[#668D12]
                 hover:text-white" onClick={handleStore}>
                            Register your store with us
                        </button>
                        <button className="mt-2 w-full text-base btn
                 text-[#ACC43F] text-[#668D12]
                 hover:bg-gradient-to-r from-[#668D12] to-[#ACC43F]  
                 hover:border-[#ACC43F] border-[#668D12]
                 hover:text-white">
                            Login with different account
                        </button>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default StoreReg