import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import qZone1 from "../../../assets/qZone1.png";
import qZone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone3.png";


const RightSideNav = () => {

    return (

        <div>
            <div className="space-y-3">

                <h2 className="text-2xl font-semibold">Login With</h2>
                <div className="">
                    <button className="btn btn-outline w-full text-blue-600">
                        <FaGoogle />
                        Login With Google
                    </button>
                </div>

                <div className="">
                    <button className="btn btn-outline w-full">
                        <FaGithub />
                        Login With Github
                    </button>
                </div>

            </div>

            <div className="space-y-3">

                <h2 className="text-2xl font-semibold my-4">Find Us On</h2>

                <div className="border rounded-t-lg rounded-b-lg" >
                    <a className="flex items-center gap-2 p-3 border-b hover:underline"
                        href="">
                        <span className="w-8 bg-[#F3F3F3] text-[#3B599C] rounded-full p-2"><FaFacebookF /></span>
                        <span className="text-[#706F6F] font-medium">Facebook</span>
                    </a>

                    <a className="flex items-center gap-2 p-3 border-b hover:underline"
                        href="">
                        <span className="w-8 bg-[#F3F3F3] text-[#58A7DE] rounded-full p-2"><FaTwitter /></span>
                        <span className="text-[#706F6F] font-medium">Twitter</span>
                    </a>

                    <a className="flex items-center gap-2 p-3 hover:underline"
                        href="">
                        <span className="w-8 bg-[#F3F3F3] text-[#D82D7E] rounded-full p-2"><FaInstagram /></span>
                        <span className="text-[#706F6F] font-medium">Instagram</span>
                    </a>
                </div>
            </div>

            <div className="bg-[#F3F3F3] my-6 rounded-lg">
                <h2 className="text-2xl font-semibold p-4">Q Zone</h2>
                <img className="p-2 mb-2" 
                src={qZone1} alt="" />

                <img className="p-2 mb-2" 
                src={qZone2} alt="" />

                <img className="p-2 mb-2" 
                src={qZone3} alt="" />

            </div>

        </div>
    );
};

export default RightSideNav;