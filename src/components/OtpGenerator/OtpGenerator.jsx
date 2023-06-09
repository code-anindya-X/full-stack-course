import React, { useState } from "react";
import "./OtpGenerator.css";
const OtpGenerator = () => {
  const [otp, setOtp] = useState("");

  const otpGenerateHandler = () => {
    const num = "0987654321";
    let otpValue = "";
    for (let i = 0; i < 4; i++) {
      const random = Math.random() * 10;
      const floor = Math.floor(random);
      otpValue += num[floor];
    }
    setOtp(otpValue);
  };
  const otpValueMessage = (
    <p className="otp-value">
      your otp is :- <span>{otp}</span>
    </p>
  );
  const noOtpValue = <p>please click on above button to generate OTP</p>;

  return (
    <>
      <div className="d-flex justify-content-center">
        <button className="btn btn-success" onClick={otpGenerateHandler}>
          generate otp
        </button>
      </div>
      <div className="d-flex justify-content-center mt-3 p-2">
        {/* {otp && otpValueMessage}
        {!otp && noOtpValue} */}
        {otp ? otpValueMessage : noOtpValue}
      </div>
    </>
  );
};

export default OtpGenerator;
