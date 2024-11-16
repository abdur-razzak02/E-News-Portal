import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const FindUsSocial = () => {
  return (
    <div className="space-y-3">
      <h1 className="font-semibold text-2xl"> Find us on</h1>
      <div className="join join-vertical flex *:bg-white *:font-normal *:justify-start">
        <button className="btn join-item ">
          <FaFacebook className="text-blue-600"></FaFacebook>Facebook
        </button>
        <button className="btn join-item">
          <FaInstagram className="text-orange-400"></FaInstagram> Instagram
        </button>
        <button className="btn join-item">
          <FaXTwitter /> Twitter
        </button>
      </div>
    </div>
  );
};

export default FindUsSocial;
