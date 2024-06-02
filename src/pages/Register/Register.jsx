import { Link } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const Register = () => {

    const { createUser } = useContext(AuthContext);

    const handleRegister = e => {

        e.preventDefault();

        const form = new FormData(e.currentTarget);

        const name = form.get('name');
        const photoURL = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');

        createUser(email, password)

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
                <h3 className="text-[#403F3F] text-3xl font-semibold mx-auto pt-6">Register Your Account</h3>

                <form onSubmit={handleRegister}
                    className="card-body">

                    <div className="form-control">

                        <label className="label">
                            <span className="label-text text-[#403F3F] font-medium">Your Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />

                    </div>

                    <div className="form-control">

                        <label className="label">
                            <span className="label-text text-[#403F3F] font-medium">Photo URL</span>
                        </label>
                        <input type="link" name="photo" placeholder="Photo URL" className="input input-bordered" />

                    </div>

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

                    </div>

                    <div className="form-control mt-2">
                        <button className="bg-[#403F3F] hover:bg-[#292828] text-white text-lg font-medium py-2 rounded">Register</button>

                        <p className="mt-2 text-[#706F6F] ">Already Have an Account?
                            <Link className="ms-2 text-[#FF8C47] font-medium hover:underline" to={"/login"}>Login Here</Link>
                        </p>
                    </div>

                </form>

            </div>

        </div>

    </div>
);
};



export default Register;