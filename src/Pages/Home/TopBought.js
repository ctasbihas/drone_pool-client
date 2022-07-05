import React, { useEffect, useState } from 'react';

const TopBought = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('topBought.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    return (
        <div className='grid grid-cols-3 gap-5 mx-3 mt-16'>
            {
                products.map(product =>
                    <>
                        <div className="card bg-base-100 shadow-xl">
                            <figure><img className='h-40' src={product.img} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Product: {product.name}</h2>
                                <p><span className='font-bold'>Description: </span>{product.description}</p>
                                <p><span className='font-bold'>Price: </span>${product.price}</p>
                                <p><span className='font-bold'>Available: </span>{product.available} pieces</p>
                                <p><span className='font-bold'>Minimum order: </span>{product.minimum} pieces</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </>
                )
            }
        </div>
    );
};

export default TopBought;