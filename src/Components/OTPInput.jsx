import React, { useEffect, useRef, useState } from 'react'

const OTPInput = ({ length = 4, onOTPSubmit = () => { } }) => {

    const [otp, setOtp] = useState(new Array(length).fill(""));
    const inputRefs = useRef([])

    useEffect(() => {
        if (inputRefs.current[0]) {
            inputRefs.current[0].focus();
        }
    }, [])

    // console.log(inputRefs)

    const handleChange = (index, e) => {

        const value = e.target.value;
        if (isNaN(value)) return;

        const newOTP = [...otp];
        //allow 1 input
        newOTP[index] = value.substring(value.length - 1)
        setOtp(newOTP);

        //submit trigger
        const combinedOTP = newOTP.join("");
        if (combinedOTP.length === length) onOTPSubmit(combinedOTP);

        //Move to next input if current field is filled
        if (value && index < length - 1 && inputRefs.current[index + 1]) {
            inputRefs.current[index + 1].focus();
        }
    }

    const handleClick = (index) => {
        inputRefs.current[index].setSelectionRange(1, 1);
        //optional
        if (index > 0 && !otp[index - 1]) {
            inputRefs.current[otp.indexOf("")].focus();
        }
    }

    const handleKeyDown = (index, e) => {
        if (e.key === "Backspace" && !otp[index] && index > 0 && inputRefs.current[index - 1]) {
            //Move focus to the previous input field on backspace
            inputRefs.current[index - 1].focus();
        }
    }

    return (
        <div className='flex space-x-5 mt-2 mb-10'>
            {
                otp.map((value, index) => {
                    return (
                        <input key={index} type='text' value={value}
                            ref={(input) => (inputRefs.current[index] = input)}
                            onChange={(e) => handleChange(index, e)}
                            onClick={() => handleClick(index)}
                            onKeyDown={(e) => handleKeyDown(index, e)}
                            className='w-10 h-10 border text-center text-lg' />
                    );
                })
            }
        </div>
    )
}


export default OTPInput