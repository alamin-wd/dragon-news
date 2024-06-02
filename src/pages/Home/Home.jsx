import { useLoaderData } from "react-router-dom";
import Header from "../shared/Header/Header";
import LeftSideNav from "../shared/LeftSideNav/LeftSideNav";
import Navbar from "../shared/Navbar/Navbar";
import RightSideNav from "../shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import NewsCard from "./News/NewsCard";

const Home = () => {

    const news = useLoaderData();

    return (

        <div>

            <div>
                <Header></Header>
                <BreakingNews></BreakingNews>
                <Navbar></Navbar>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <LeftSideNav></LeftSideNav>
                </div>

                <div className="md:col-span-2">
                    {
                        news.map(singleNews => <NewsCard
                            key={singleNews._id}
                            news={singleNews}
                        ></NewsCard>)
                    }
                </div>

                <div className="">
                    <RightSideNav></RightSideNav>

                    <div className="bg-[#05001DCC] p-10 text-white text-center space-y-4">

                        <h3 className="text-3xl font-bold">Create an Amazing Newspaper</h3>

                        <p>
                            Discover thousands of options, easy to customize layouts, one-click to import demo and much more.
                        </p>

                        <button className="bg-[#D72050] hover:bg-[#f5275e] font-semibold px-4 py-2">Learn More</button>

                    </div>
                </div>

            </div>

        </div>
    );
};

export default Home;