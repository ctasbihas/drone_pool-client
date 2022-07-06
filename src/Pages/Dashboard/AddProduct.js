import React from 'react';

const AddProduct = () => {
    return (
        <div className='lg:w-1/2'>
            <h1 className='text-3xl font-bold text-green-600'>Please Add A Product</h1>
            <input type="text" placeholder="Product Name" className="input input-bordered w-full mt-3" /><br />

            <textarea className="textarea textarea-bordered w-full mt-3" placeholder="Product Description"></textarea><br />

            <input type="text" placeholder="Product Price" className="input input-bordered w-full mt-3" /><br />

            <input type="text" placeholder="Product Quantity" className="input input-bordered w-full mt-3" /><br />

            <input type="text" placeholder="Minimum Order" className="input input-bordered w-full mt-3" /><br />

            <input type="text" placeholder="Product img" className="input input-bordered w-full mt-3" />
            <button className="btn glass mt-3 w-1/2 text-green-500">Add Product</button>
        </div>
    );
};

export default AddProduct;