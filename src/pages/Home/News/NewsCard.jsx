import { FaRegBookmark } from "react-icons/fa";
import { IoMdShare } from "react-icons/io";
import { FaStar } from "react-icons/fa6";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {

    const { author, title, image_url, details, rating, total_view } = news;

    return (

        <div className="max-w-full border mb-6">

            <div className="bg-[#F3F3F3] flex justify-between items-center text-[#706F6F] p-4">

                <div className="flex items-center gap-3">
                    <img className="w-12 rounded-full" src={author.img} alt="" />
                    <span>
                        <h4 className="text-[#403F3F] text-xl font-semibold">{author.name}</h4>
                        <p><small>{author.published_date}</small></p>
                    </span>
                </div>

                <div className="flex items-center gap-2">
                    <span><FaRegBookmark /></span>
                    <span><IoMdShare /></span>
                </div>

            </div>

            <div className="m-4">

                <div>
                    <h3 className="text-[#403F3F] text-xl font-bold">{title}</h3>
                    <img className="my-6" src={image_url} alt="" />
                    {
                        details.length > 200
                            ? <p className="text-[#706F6F] mb-4">{details.slice(0, 200)}
                                <Link
                                    className="text-[#FF8C47] font-semibold hover:underline ms-1">Read More...</Link>
                            </p>
                            : <p className="text-[#706F6F] mb-4">{details}</p>
                    }
                </div>

                <div className="flex justify-between items-center text-[#706F6F] pt-3 border-t ">
                    <div className="flex items-center gap-3">
                        <p className="font-medium">{rating.badge}</p>

                        <span className="flex items-center gap-1 text-[#FF8C47]" >
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaRegStarHalfStroke />
                        </span>
                        <p>{rating.number}</p>
                    </div>

                    <div className="flex items-center gap-2">
                        <FaEye />
                        <p>{total_view}</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default NewsCard;