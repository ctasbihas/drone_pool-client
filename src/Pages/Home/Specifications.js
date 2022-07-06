import React from 'react';

const Specifications = () => {
    return (
        <section className='mt-16 flex p-5'>
            <section className='mx-5 w-1/2 my-auto'>
                <h1 className="text-4xl font-bold">Drone Specifications</h1>
                <p>We provide the best components of the world which make your computer supper fast and very attractive looks. Our brand is our product guarantee.</p>
            </section>
            <section className='w-1/2'>
                <div className="card shadow-xl image-full">
                    <figure><img src="https://cdn.mos.cms.futurecdn.net/DRUiFCQpVibx3UQF7pVNaK-970-80.jpg.webp" alt="Shoes" /></figure>
                    <div className="card-body">
                        <div className=" w-full border-opacity-50 mt-4">
                            <div className='flex justify-start'>
                                <h3 className="py-3 card rounded-box place-items-center"><span className='font-bold'>Weight:</span> Under 500g</h3>
                            </div>
                            <div className='flex justify-end'>
                                <h3 className="py-3 card rounded-box place-items-center"><span className='font-bold'>Controller:</span> With a Controller</h3>
                            </div>
                            <div className='flex justify-center'>
                                <h3 className="py-3 card rounded-box place-items-center "><span className='font-bold'>Camera resolution:</span> 12MP</h3>
                            </div>
                            <div className='flex justify-start'>
                                <h3 className="py-3 card rounded-box place-items-center "><span className='font-bold'>Battery size:</span> Minimum 2,250 mAh</h3>
                            </div>
                            <div className='flex justify-end '>
                                <h3 className="py-3 card rounded-box place-items-center "><span className='font-bold'>Range:</span> Up to 5km</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </section>
    );
};

export default Specifications;