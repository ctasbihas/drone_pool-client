import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user, loading, error] = useAuthState(auth);
    return (
        <div>
            <h2 className='text-3xl font-bold text'>My Profile</h2>
            <h3 className='text-2xl'>Name: { user?.displayName}</h3>
            <h3 className='text-2xl'>Email: {user?.email}</h3>
            <input type="text" placeholder="Enter Your Education Qualification" className="input input-bordered w-full max-w-xs mt-3" /><button className="btn ml-2">Save</button><br />
            <input type="text" placeholder="Enter Your Mobile Number" className="input input-bordered w-full max-w-xs mt-3" /><button className="btn ml-2">Save</button><br />
            <input type="text" placeholder="Enter Your Facebook Profile URL" className="input input-bordered w-full max-w-xs mt-3" /><button className="btn ml-2">Save</button><br />
            <input type="text" placeholder="Enter Your Location" className="input input-bordered w-full max-w-xs mt-3    " /><button className="btn ml-2">Save</button>
        </div>
    );
};

export default MyProfile;