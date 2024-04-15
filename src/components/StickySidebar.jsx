import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";


const StickySidebar = () => {
  return (
    <div className="bg-[#ffffff] fixed bottom-1/4 right-0 rounded-xl shadow-lg border-2 border-black">
      <div className=" text-white font-bold p-2 my-0.5">
        <a href="tel:+1234567890">
          <FaPhone className="text-4xl text-black" />
        </a>
      </div>
      <div className=" text-white font-bold p-2 my-0.5">
        <a href="https://wa.me/1234567890">
          <FaWhatsapp className="text-4xl text-black" />
        </a>
      </div>
      <div className=" text-white font-bold p-2 my-0.5">
        <a href="mailto:mustermann@beispiel.de">
          <IoMdMail className="text-4xl text-black" />
        </a>
      </div>
    </div>
  );
};

export default StickySidebar;

