import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const FindUsSocial = () => {
  return (
    <div className="space-y-3">
      <h1 className="font-semibold text-2xl"> Find us on</h1>
      <div className="join join-vertical flex *:bg-white *:font-normal *:justify-start">
        <Link to={'https://www.facebook.com/'} target="_blank" className="btn join-item">
          <FaFacebook className="text-blue-600"></FaFacebook>Facebook
        </Link>
        <Link to={'https://www.instagram.com/'} target="_blank" className="btn join-item">
          <FaInstagram className="text-orange-400"></FaInstagram> Instagram
        </Link>
        <Link to={'https://x.com'} target="_blank" className="btn join-item">
          <FaXTwitter /> Twitter
        </Link>
      </div>
    </div>
  );
};

export default FindUsSocial;
