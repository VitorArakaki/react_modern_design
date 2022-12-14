import React from "react";

const Button = ({ styles, message }) => (
  <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
  onClick={() => {console.log(message)}}>
    Get Started
  </button>
);

export default Button;