import { useLoaderData } from "react-router-dom";
import NewsCard from "../components/NewsCard";


const CategoryNews = () => {
    const {data} = useLoaderData();
    
    return (
        <div>
            <div className="text-2xl font-semibold mb-3"><h1>Dragon News</h1></div>
            <div>
                {
                    data.map(singleNews => <NewsCard key={singleNews._id} news={singleNews}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;