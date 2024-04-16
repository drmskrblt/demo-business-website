import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";


const StickySidebar = () => {
  return (
    <div className="fixed bottom-[25px] right-0 rounded-xl shadow-lg">
      <div className=" text-white font-bold p-2 my-0.5 bg-green-400 rounded-xl">
        <a href="tel:+4917662665748">
          <FaPhone className="text-3xl white" />
        </a>
      </div>
      <div className=" text-white font-bold p-2 my-0.5 bg-white rounded-xl">
        <a href="https://wa.me/4917662665748">
          <FaWhatsapp className="text-3xl text-[#25D366]" />
        </a>
      </div>
      <div className=" text-white font-bold p-2 my-0.5 bg-white rounded-xl">
        <a href="mailto:adem.karabulut@nextvision-it.de">
          <IoMdMail className="text-3xl text-blue-400" />
        </a>
      </div>
    </div>
  );
};

export default StickySidebar;

