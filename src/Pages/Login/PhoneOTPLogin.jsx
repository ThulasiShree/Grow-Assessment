import React, { useState, useEffect } from "react";
import BGImg from "../../assets/homebg.jpg";
import Logo from "../../assets/growlogo.png";
import OTPInput from "../../Components/OTPInput";
import { useNavigate } from "react-router-dom";

const PhoneOTPLogin = () => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [showOTPInput, setShowOTPInput] = useState(false);
    const [resendTimer, setResendTimer] = useState(60); // Timer in seconds

    const navigate = useNavigate();

    useEffect(() => {
        let timer;
        if (showOTPInput && resendTimer > 0) {
            timer = setInterval(() => {
                setResendTimer((prev) => prev - 1);
            }, 1000);
        }
        return () => clearInterval(timer); // Cleanup timer on unmount or reset
    }, [showOTPInput, resendTimer]);

    const handlePhoneNumber = (e) => {
        setPhoneNumber(e.target.value);
    };

    const handlePhoneSubmit = (e) => {
        e.preventDefault();

        // Validate phone number
        const regex = /^[0-9]{10}$/; // Accept only 10 digits
        if (!regex.test(phoneNumber)) {
            alert("Invalid Phone Number");
            return;
        }

        // Simulate sending OTP
        alert("OTP sent to your phone number!");
        setShowOTPInput(true);
        setResendTimer(60); // Reset the timer
    };

    const handleResendOTP = () => {
        if (resendTimer === 0) {
            alert("Resending OTP...");
            setResendTimer(60); // Reset the timer
        }
    };

    const onOTPSubmit = (otp) => {
        console.log("Login Successfully with OTP:", otp);
    };

    const handleVerify = () => {
        navigate('/storereg');
    }

    return (
        <div>
            {!showOTPInput ? (
                <form onSubmit={handlePhoneSubmit}>
                    <div
                        className="flex items-center justify-center h-screen bg-blue-100 bg-cover bg-center"
                        style={{ backgroundImage: `url(${BGImg})` }}
                    >
                        <div className="card mt-5 w-96 bg-white shadow-xl">
                            <div className="card-body items-center text-center">
                                <img src={Logo} className="w-12 h-12" alt="Logo" />
                                <h2 className="text-2xl font-bold">Get started with REWARDIFY</h2>
                                <p className="text-sm text-[#868C9A] mt-1 px-12">
                                    Enter your mobile number to get started
                                </p>

                                <div className="w-full mt-2">
                                    <input
                                        type="text"
                                        className="border rounded text-sm w-full px-3 py-2 mb-9"
                                        value={phoneNumber}
                                        onChange={handlePhoneNumber}
                                        placeholder="Enter your Mobile Number"
                                    />
                                    <button
                                        type="submit"
                                        className="mt-5 w-full text-base btn text-[#868C9A] bg-neutral-content border-0
                   hover:bg-gradient-to-r from-[#668D12] to-[#ACC43F]  
                   hover:border-[#ACC43F] border-[#668D12]
                   hover:text-white"
                                    >
                                        Send OTP
                                    </button>
                                </div>
                                <div className="mx-12 my-1">
                                    <p className='text-xs text-gray-500'>By clicking, you agree to our <span className='text-black font-normal'>Terms & Conditions</span> and <span className=''> Privacy Policy.</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            ) : (
                <div>
                    <div
                        className="flex items-center justify-center h-screen bg-blue-100 bg-cover bg-center"
                        style={{ backgroundImage: `url(${BGImg})` }}
                    >
                        <div className="card mt-5 w-96 bg-white shadow-xl">
                            <div className="card-body items-center text-center">
                                <img src={Logo} className="w-12 h-12" alt="Logo" />
                                <h2 className="text-2xl font-bold">Verify your details</h2>
                                <p className="text-sm text-[#868C9A] mt-1 px-12">Enter OTP number below</p>

                                <div>
                                    <OTPInput length={4} onOTPSubmit={onOTPSubmit} />
                                </div>

                                <div className="w-full mt-5">
                                    <button className="mt-5 w-full text-base btn
                    text-[#868C9A] bg-neutral-content border-0
                    hover:bg-gradient-to-r from-[#668D12] to-[#ACC43F]  
                    hover:border-[#ACC43F] border-[#668D12]
                    hover:text-white" onClick={handleVerify}>
                                        Verify and Continue
                                    </button>
                                </div>

                                <div className="mx-12 my-1">
                                    <p className="text-xs text-gray-500">
                                        Didn’t receive OTP?{" "}
                                        {resendTimer > 0 ? (
                                            <span>Resend in 0:{resendTimer < 10 ? `0${resendTimer}` : resendTimer}</span>
                                        ) : (
                                            <span
                                                onClick={handleResendOTP}
                                                className="text-blue-600 cursor-pointer hover:underline"
                                            >
                                                Resend Now
                                            </span>
                                        )}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PhoneOTPLogin;
