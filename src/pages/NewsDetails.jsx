import { Link, useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import RightNavbar from "../components/LayoutComponents/RightNavbar";
import { FaArrowLeft } from "react-icons/fa";

const NewsDetails = () => {
  const { data } = useLoaderData();
  const { title, details, image_url, category_id } = data[0];
  console.log(data[0]);

  return (
    <div>
      <Header></Header>
      <section className="w-11/12 mx-auto md:grid grid-cols-4 gap-5 mt-10">
        <div className="col-span-3 mb-5">
          <div className="card bg-base-100 shadow-lg border p-5">
            <figure>
              <img src={image_url} alt="thumbnail" className="rounded-xl" />
            </figure>
            <div className="card-body p-0 mt-5 space-y-3">
              <h2 className="card-title">{title}</h2>
              <p>{details}</p>
              <div className="card-actions">
                <Link
                  to={`/category/${category_id}`}
                  className="btn btn-primary"
                >
                  <FaArrowLeft /> All news in this category
                </Link>
              </div>
            </div>
          </div>
        </div>
        <RightNavbar></RightNavbar>
      </section>
    </div>
  );
};

export default NewsDetails;
