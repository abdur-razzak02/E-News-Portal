import { FaEye, FaStar } from "react-icons/fa";
import { CiShare2, CiBookmark } from "react-icons/ci";
import { Link } from "react-router-dom";

const NewsCard = (props = {}) => {
  const { news } = props || {};
  const {
    title,
    thumbnail_url,
    rating,
    details,
    total_view,
    author: { name, img, published_date },
  } = news;

  return (
    <div className="card bg-white shadow-md border rounded-lg overflow-hidden mb-8">
      {/* Author Info */}
      <div className=" p-3 bg-[#f2f2f2] flex justify-between">
        <div className="flex items-center space-x-3">
          <img src={img} alt="Author" className="w-10 h-10 rounded-full" />
          <div>
            <p className="text-sm font-medium">{name}</p>
            <p className="text-xs text-gray-500">{published_date}</p>
          </div>
        </div>
        <div className="flex items-center justify-center px-5 gap-3">
          <CiShare2 className="cursor-pointer" />{" "}
          <CiBookmark className="cursor-pointer" />
        </div>
      </div>

      {/* Title */}
      <h2 className="text-lg font-semibold p-2">{title}</h2>

      {/* Thumbnail */}
      <img
        src={thumbnail_url}
        alt="Thumbnail"
        className="w-full h-[350px] object-cover px-2 rounded-s-md"
      />

      {/* Details */}
      <h1 className="text-sm text-gray-600 pb-4 p-2 border-b">
        {details.length > 100 ? `${details.slice(0, 140)}...` : details}
        <Link to={`/news/${news._id}`} className="text-blue-500">
          read more...
        </Link>
      </h1>

      {/* Card Content */}
      <div className="p-4">
        <div className="flex justify-between items-center">
          {/* Star Rating*/}
          <div className="flex items-center space-x-1 text-yellow-500">
            {Array.from({ length: Math.round(rating.number) }, (_, i) => (
              <FaStar key={i} />
            ))}
            <span className="text-sm text-gray-800 pl-1">{rating.number}</span>
          </div>
          {/* Views */}
          <div className="flex items-center space-x-1 text-gray-500">
            <FaEye />
            <span className="text-sm">{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
