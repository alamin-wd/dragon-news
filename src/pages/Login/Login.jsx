import { Link } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {

    const { logIn } = useContext(AuthContext);

    const handleLogin = e => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);

        const email = form.get('email');
        const password = form.get('password');

        logIn(email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.error(error);
            })

    }

    return (

        <div className="max-w-full bg-base-200">
            <div className="w-11/12">
                <Navbar></Navbar>
            </div>
            <div className="hero pb-14">

                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h3 className="text-[#403F3F] text-3xl font-semibold mx-auto pt-6">Login Your Account</h3>

                    <form onSubmit={handleLogin}
                        className="card-body">

                        <div className="form-control">

                            <label className="label">
                                <span className="label-text text-[#403F3F] font-medium">Email Address</span>
                            </label>
                            <input type="email" name="email" placeholder="Email" className="input input-bordered" required />

                        </div>

                        <div className="form-control">

                            <label className="label">
                                <span className="label-text text-[#403F3F] font-medium">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Password" className="input input-bordered" required />

                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover text-[#706F6F]">Forgot password?</a>
                            </label>

                        </div>

                        <div className="form-control mt-2">
                            <button className="bg-[#403F3F] hover:bg-[#292828] text-white text-lg font-medium py-2 rounded">Login</button>

                            <p className="mt-2 text-[#706F6F] ">Do not Have an Account?
                                <Link className="ms-2 text-[#FF8C47] font-medium hover:underline" to={"/register"}>Register Now</Link>
                            </p>
                        </div>

                    </form>

                </div>

            </div>

        </div>

    );
};

export default Login;