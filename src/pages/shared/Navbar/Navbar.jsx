import { Link, NavLink,  } from "react-router-dom";
import userDefaultPhoto from "../../../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
        .then()
        .catch()
    }

    const navLinks = <>
        <li className="text-lg font-medium mr-2">
            <NavLink to="/">Home</NavLink>
        </li>
        <li className="text-lg font-medium mr-2">
            <NavLink to="/about">About</NavLink>
        </li>
        <li className="text-lg font-medium mr-2">
            <NavLink to="/career">Career</NavLink>
        </li>
    </>

    return (
        <div className="navbar mb-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            navLinks
                        }
                    </ul>
                </div>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        navLinks
                    }
                </ul>
            </div>

            {/* Navbar End */}
            <div className="navbar-end">

                <div tabIndex={0} role="button"
                    className="btn btn-ghost btn-circle avatar mr-2">
                    <div className="w-10 rounded-full">
                        <img src={userDefaultPhoto} />
                    </div>
                </div>
                <div>
                    {
                        user ?
                                <button onClick={handleLogOut}
                                    className="bg-[#403F3F] hover:bg-[#292828] text-white text-lg font-medium px-4 py-1 rounded-lg">Log Out</button>
                            :
                            <Link to={"/login"}>
                                <button className="bg-[#403F3F] hover:bg-[#292828] text-white text-lg font-medium px-4 py-1 rounded-lg">Login</button>
                            </Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;