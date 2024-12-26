import { useContext, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Providers/AuthProvider";


const Login = () => {

    const { loginUser, googleLogin, setUser } = useContext(AuthContext);
    const [error, setError] = useState({});
    const location = useLocation();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        loginUser(email, password)
            .then(() => {
                Swal.fire({
                    title: 'Success!',
                    text: ' Login Successfully',
                    icon: 'success',
                    confirmButtonText: 'Close'
                })
                navigate(location?.state ? location.state : '/')
            })
            .catch(err => {
                setError({ ...error, login: err.code })
                Swal.fire({
                    icon: "error",
                    title: "Something wrong!...",
                    text: "Your email & password Does not match",
                });
            });
    };

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const signIn = result.user;
                console.log(signIn)
                setUser(signIn)
                Swal.fire({
                    title: 'Success!',
                    text: 'Login Successfully',
                    icon: 'success',
                    confirmButtonText: 'Close'
                })
                navigate(location?.state ? location.state : '/');
            })
            .catch(err => {
                setError({ ...error, login: err.code })
                Swal.fire({
                    icon: "error",
                    title: "Something wrong!...",
                    text: "Your email & password Does not match",
                });
            });
    }

    return (
        <div>
            <div className="bg-base-300 rounded-2xl w-11/12 md:max-w-[750px] mx-auto my-10">
                <div className="flex flex-col justify-center md:gap-2 p-2 md:px-20 py-12">
                    <div>
                        <button className="btn btn-sm btn-accent"><Link to="/">Home</Link></button>
                    </div>
                    <h2 className="text-center font-semibold text-2xl md:text-4xl">Login your account</h2>
                    <div className="divider mb-0"></div>
                    <form onSubmit={handleSubmit} className="card-body gap-0 md:gap-2 p-0">
                        <div className="form-control">
                            <label className="label">
                                <span className="md:text-xl font-semibold ">Email Address</span>
                            </label>
                            <input type="email" name="email" placeholder="Enter your email address" className="input bg-base-200" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="md:text-xl font-semibold">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input bg-base-200" required />
                            {
                                error.login && <label className="label text-xs text-red-500">{error.login}

                                </label>
                            }
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forget Password ?</a>
                            </label>
                        </div>
                        <div className="form-control mt-2 md:mt-6">
                            <button className="p-2 rounded-lg bg-blue-500 w-40 mx-auto">Login</button>
                        </div>
                        <p className="text-center pt-2">Don't Have An Account ? <Link to="/register" ><span className="text-red-500">Register</span></Link> </p>
                    </form>
                    <div className="divider"></div>
                    <button onClick={handleGoogleLogin} className="w-40 md:w-60 mx-auto md:text-xl font-bold btn btn-accent">Login with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;