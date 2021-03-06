import React from "react";
import {  useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import auth from "../../firebase.init";
import SocialLogin from "../Shared/SocialLogin";

const Login = () => {
    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const location = useLocation();
    let errorMessage;
    const from = location.state?.from?.pathname || "/";

    const onSubmit =  (data) => {
        console.log(data);
        signInWithEmailAndPassword(data.email, data.password);
        };
    if (user) {
        navigate(from, { replace: true });
    }
    if (error) {
        errorMessage = <div class="alert alert-error shadow-lg">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>{error.code}</span> 
            </div>
        </div>
    }
    return (
        <div className="hero mb-20 bg-base-100">
            <div className="hero-content flex-col lg:flex-row-reverse lg:w-1/3">
                <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100 px-3">
                    <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                        <h2 className="text-3xl text-center">Login to your account</h2>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                {...register("email", { required: true })}
                                type="email"
                                placeholder="Email"
                                className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                {...register("password")}
                                type="password"
                                placeholder="Password"
                                className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        {errorMessage}
                        <div className="form-control mt-6">
                            <button type="submit" className={loading ? "btn btn-primary loading" : "btn btn-primary"}>Login</button>
                        </div>
                        <h3 className="text-md">New in Drone Pool? <Link to="/register" className=" link-hover">Register</Link></h3>
                    </form>
                    <SocialLogin />
                </div>
            </div>
        </div>
    );
}
export default Login;