import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
    return (
        <div className="flex items-center gap-2 p-2 bg-gray-200">
            <p className="px-3 bg-red-500 py-1 text-white">Latest</p>
            <Marquee pauseOnHover={true} className="space-x-10">
                <Link>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, possimus!</Link>
                <Link>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, possimus!</Link>
                <Link>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, possimus!</Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;