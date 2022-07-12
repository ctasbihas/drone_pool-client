import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate, useLocation } from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let errorMessage;

    const from = location.state?.from?.pathname || "/";

    if (user) {
        navigate(from, { replace: true });
    }
    if (error) {
        errorMessage = <div class="alert alert-error shadow-lg my-2">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>{error.code}</span>
            </div>
        </div>
    }
    return (
        <div>
            <div className="divider">OR</div>
            {errorMessage}
            <div className="flex w-full">
                <button
                    onClick={() => signInWithGoogle()}
                    className={loading ? "btn btn-success rounded-box place-items-center loading" : "btn btn-success flex-grow card rounded-box place-items-center"}
                >Google</button>
                <div className="divider divider-horizontal">OR</div>
                <button className="btn btn-success flex-grow card rounded-box place-items-center btn-disabled">Facebook</button>
            </div>
        </div>
    );
};

export default SocialLogin;