const Button = ({ text, icon, redButton }) => {
  return (
    <div>
      {/* <button className="text-[#fff] text-lg bg-red-500 py-3 mt-[30px] mb-[20px] px-10 rounded-[30px] flex items-center justify-center gap-3"> */}
      <button className={redButton ? "text-[#fff] text-lg outline-none bg-[#ff4040] py-3 px-10 rounded-[30px] flex items-center justify-center gap-3"
      : "border border-gray-600 ext-lg py-3 flex outline-none  justify-center items-center px-9 rounded-[30px]" 
      }>
        {text}
        {icon}
      </button>

      {/* <button onClick={onClick} className={twMerge('bg-main-blue py-[10px] px-[24px] text-white text-[16px] rounded-[16px] hover:bg-opacity-75', className)}>{children}</button> */}
    </div>
  );
};

export default Button;
