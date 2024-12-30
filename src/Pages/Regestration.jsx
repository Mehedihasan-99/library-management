import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Providers/AuthProvider";

const Register = () => {

    const { createNewUser } = useContext(AuthContext)
    const [error, setError] = useState({})
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        setError({})
        // get form data
        const form = e.target;
        // const name = form.name.value;
        // const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        if (password.length < 6) {
            setError({ ...error, password: "password must be  more then 6 character or long" });
            return;
        };
        if (!/[A-Z]/.test(password)) {
            setError({ ...error, password: "password must be minimum 1 Capital letter" });
            return;
        };
        if (!/[a-z]/.test(password)) {
            setError({ ...error, password: "password must be minimum 1 Small letter" });
            return;
        };
        createNewUser(email, password)
            .then((result) => {
                console.log(result.user)
                Swal.fire({
                    title: 'Success!',
                    text: 'User Registration Successfully',
                    icon: 'success',
                    confirmButtonText: 'Close'
                })
                form.reset();
                navigate("/")
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorCode, errorMessage);
            })
    };


    return (
        <div className=" bg-base-300 rounded-2xl w-11/12 md:w-3/4 mx-auto my-10">
            <div className="flex flex-col justify-center md:gap-2 p-2 md:px-20 py-12">
                <h2 className="text-center font-semibold text-2xl md:text-4xl">Register your account</h2>
                <div className="divider mb-0"></div>
                <form onSubmit={handleSubmit} className="card-body gap-0 md:gap-2 p-0">
                    <div className="form-control">
                        <label className="label">
                            <span className="md:text-xl font-semibold ">Your Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Enter your name" className="input bg-base-200" required />
                        {
                            error.name && <label className="label text-xs text-red-500">{error.name}

                            </label>
                        }
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="md:text-xl font-semibold ">Photo URL</span>
                        </label>
                        <input type="text" name="photo" placeholder="Enter your profile picture" className="p-3 rounded-lg bg-base-200" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="md:text-xl font-semibold ">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Enter your email address" className="input bg-base-200" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="md:text-xl font-semibold">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input bg-base-200" required />
                        {
                            error.password && <label className="label text-xs text-red-500">{error.password}

                            </label>
                        }
                    </div>
                    <div className="flex gap-1">
                        <input type="checkbox" name="terms" required />
                        <span>Accept Term & Conditions</span>
                    </div>
                    <div className="form-control mt-2 md:mt-6">
                        <button className="p-2 rounded-lg bg-blue-500 w-40 mx-auto">Register</button>
                    </div>
                    <p className="text-center pt-2">I have An Account ? <Link to='/login'><span className="text-red-500">Login</span></Link> </p>
                </form>
            </div>
        </div>
    );
};

export default Register;