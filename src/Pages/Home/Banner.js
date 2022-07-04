import React from 'react';

const Banner = () => {
    return (
        <div className="hero my-10 bg-base-100">
            <div className="hero-content flex-col lg:flex-row">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5mCIfLJCRGKRpPFmrV2TORy_VOudnq3PDdA&usqp=CAU"
                    className="rounded-lg shadow-2xl lg:w-1/2" />
                <div className=' lg:w-1/2'>
                    <h1 className="text-5xl font-bold">Drone Pool presents</h1>
                    <p class="py-6">Drone Pool Making Best drone parts for you, so that you can achieve full of trust of you customer..</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>  
    );
};

export default Banner;