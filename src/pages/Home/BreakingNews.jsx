import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const BreakingNews = () => {

    return (

        <div className="bg-[#F3F3F3] p-2 flex justify-between items-center gap-4">
            <button
                className="bg-[#D72050] w-36 text-white px-2 py-1">
                Latest News
            </button>
            <span className="md:w-11/12"><Marquee pauseOnHover={true}>
                <Link className="mx-6">I can be a React component, multiple React components, or just some text.</Link>
                <Link className="mx-6">I can be a React component, multiple React components, or just some text.</Link>
                <Link className="mx-6">I can be a React component, multiple React components, or just some text.</Link>
            </Marquee></span>
        </div>
    );
};

export default BreakingNews;