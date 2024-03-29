import { useEffect, useState } from "react";
import NikeLogo from "../../assets/nikeLogo.svg";
import hamMenu from "../../assets/hamburger.svg";
import SignupModal from "../../Onboarding/modal";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  
  const close = () => setOpenModal(false)
  const open = () => setOpenModal(true)

  const handleScroll = () => {
    const offset = window.scrollY;

    if (offset > 130) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });


  return (
    <header
      className={
        !scrolled
          ? "w-[100%] px-[40px] items-center min-h-[11vh] box-border flex justify-between bg-gray-800 transition-all ease-in duration-75"
          : "w-[100%] px-[40px] items-center min-h-[11vh] box-border flex justify-between transition-all ease-in duration-75 fixed top-0 left-0 bg-gray-900"
      }
    >
      <div>
        <img src={NikeLogo} alt="" />
      </div>

      <nav className="navigation">
        <img src={hamMenu} className="w-[30px] md:hidden" alt="" />

        <ul className="hidden md:flex justify-center items-center text-[#fff] font-[400] md:gap-[15px] gap-[24px]">
          <li className="flex flex-col justify-center items-start px-[5px]">
            Home
          </li>
          <li className="flex flex-col justify-center items-start px-[5px]">
            About Us
          </li>
          <li className="flex flex-col justify-center items-start px-[5px]">
            Products
          </li>
          <li className="flex flex-col justify-center items-start px-[5px]">
            Contact Us
          </li>
        </ul>
      </nav>

      <div className="hidden md:flex">
        <button 
        onClick={() => setOpenModal(true)}
        className="bg-blue-500 py-[7px] px-5 text-[#fff] font-[400] rounded-[5px]">
          Sign in
        </button>
        {openModal && (
          <SignupModal openModal={openModal} handleClose={close} />
        )}
      </div>
    </header>
  );
};

export default Navbar;
