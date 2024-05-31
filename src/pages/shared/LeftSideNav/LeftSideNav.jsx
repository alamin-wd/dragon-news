import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { CiCalendar } from "react-icons/ci";


const LeftSideNav = () => {

    const [categories, setCategories] = useState([]);
    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])

    useEffect(() => {
        fetch('news.json')
            .then(res => res.json())
            .then(data => setNews(data));
    }, [])

    return (

        <div>
            <div>
                <h2 className="text-2xl font-semibold">All Category</h2>
                {
                    categories.map(category => <ul
                        className="w-full menu"
                        key={category.id}>
                        <li>
                            <NavLink
                                className="text-[#9F9F9F] hover:underline"
                                to={`/category/${category.id}`}
                            >{category.name}</NavLink>
                        </li>
                    </ul>)
                }

            </div>

            <div>
                {
                    news.map(news => <div
                        className="py-4"
                        key={news.id}>

                        <img src={news.image_url} alt="" />

                        <h3 className="text-[#403F3F] text-lg font-semibold my-3">
                            {news.title}
                        </h3>

                        <div className="flex items-center gap-6">
                            <h4 className="text-[#403F3F] font-medium">Sports</h4>
                            <span className="flex items-center gap-2">
                                <CiCalendar />
                                {news.author.published_date}
                            </span>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;