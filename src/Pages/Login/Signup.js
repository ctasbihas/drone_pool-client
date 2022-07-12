import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useLocation } from "react-router-dom";
import SocialLogin from "../Shared/SocialLogin";
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init";

const Signup = () => {
    const [createUserWithEmailAndPassword, eUser, loading, error] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating] = useUpdateProfile(auth);
    const [user, setUser] = useState({});
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const location = useLocation();
    let errorMessage;
    const from = location.state?.from?.pathname || "/";

    const fetchUser = () => {
        fetch('http://localhost:5000/user', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }
    const onSubmit = async (data) => {
        await createUserWithEmailAndPassword(data.email, data.password);
        setUser(data.email, data.password);
        await updateProfile({ displayName: data.displayName });
        await fetchUser()
    };

    if (eUser) {
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
                        <h2 className="text-3xl text-center">Create New Account</h2>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                {...register("displayName", { required: true })}
                                type="text"
                                placeholder="Your name"
                                className="input input-bordered" />
                        </div>
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
                                {...register("password", { required: true })}
                                type="password"
                                placeholder="Password"
                                className="input input-bordered" />
                        </div>
                        {errorMessage}
                        <div className="form-control mt-6">
                            <button type="submit" className={loading ? "btn btn-primary loading" : "btn btn-primary"}>Sign up</button>
                        </div>
                        <h3 className="text-md">Already have an account? <Link to="/login" className=" link-hover">Login</Link></h3>
                    </form>
                    <SocialLogin />
                </div>
            </div>
        </div>
    );
}
export default Signup;