import React from 'react';
import user1 from '../../Images/user1.png';
import user2 from '../../Images/user2.png';
import user3 from '../../Images/user3.png';
import user4 from '../../Images/user4.png';

const CustomerReviews = () => {
    return (
        <div className='mt-16 mb-5'>
            <h2 className='text-4xl font-bold text-center mb-5'>What our customers says!!!</h2>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className='w-full text-center bg-base-100'>
                        <img
                            className='mx-auto h-40 my-3 rounded-full'
                            src={user1} alt="" />
                        <h3 className='text-4xl font-bold'>Rafeh Qazi</h3>
                        <h4 className='text-2xl '>Ratings: 4.5</h4>
                        <p className='w-1/3 mx-auto'>You can use this example to connect to an instance of MongoDB and interact with a database that contains sample data. To learn more about connecting to your MongoDB instance and loading a sample dataset,</p>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <div className='w-full text-center bg-base-100'>
                        <img
                            className='mx-auto h-40 my-3 rounded-full'
                            src={user2} alt="" />
                        <h3 className='text-4xl font-bold'>Ali Hossain</h3>
                        <h4 className='text-2xl '>Ratings: 4.7</h4>
                        <p className='w-1/3 mx-auto'>Head on over to our libraries page to find a JWT library in your favorite language. Head on over to our libraries page to find a JWT library in your favorite language.</p>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <div className='w-full text-center bg-base-100'>
                        <img
                            className='mx-auto h-40 my-3 rounded-full'
                            src={user3} alt="" />
                        <h3 className='text-4xl font-bold'>Sumit Saha</h3>
                        <h4 className='text-2xl '>Ratings: 4.1</h4>
                        <p className='w-1/3 mx-auto'>Because of that single extra newline in my products.json file, I wasted 2 hours fixing a bug that didn't exist in the first place. Finally when I deleted the entire products.json file and re-ran the entire thing, I didn't get any runtime errors and everything was running without any problems.</p>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <div className='w-full text-center bg-base-100'>
                        <img
                            className='mx-auto h-40 my-3 rounded-full'
                            src={user4} alt="" />
                        <h3 className='text-4xl font-bold'>Haris Khan</h3>
                        <h4 className='text-2xl '>Ratings: 4.9</h4>
                        <p className='w-1/3 mx-auto'>This is a very good shop, My experience in venom computer world was awesome. it really saves my time when i bought a new pc. thank you all.</p>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerReviews;