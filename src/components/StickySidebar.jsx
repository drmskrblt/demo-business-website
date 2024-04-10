import { IoMdChatboxes } from "react-icons/io";

const StickySidebar = () => {

  const sendMessage = () => {
    console.log("works");
  };

  return (
    <div className="fixed bottom-3 right-3">
      <div
        className="bg-[#2b4a64] text-white font-bold p-2 rounded-full drop-shadow-lg border-2 border-white"
        onClick={sendMessage}
      >
        <IoMdChatboxes className="text-4xl" />
      </div>

    </div>
  );
};

export default StickySidebar;
