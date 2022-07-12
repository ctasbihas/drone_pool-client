import React, { useEffect, useState } from 'react';

const AddProduct = () => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/prodct', {
            method: 'POST',
            header: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }, []);
    const addProduct = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const description = event.target.description.value;
        const price = event.target.price.value;
        const quantity = event.target.quantity.value;
        const order = event.target.order.value;
        const img = event.target.img.value;
        const product = {
            name,
            description,
            price,
            quantity,
            order,
            img
        };
        setProduct(product);
        console.log(product);
    }
    return (
        <div className='lg:w-1/2'>
            <h1 className='text-3xl font-bold text-green-600'>Please Add A Product</h1>
            <form onSubmit={addProduct}>
                <input name='name' type="text" placeholder="Product Name" className="input input-bordered w-full mt-3" /><br />
                <textarea name='description' className="textarea textarea-bordered w-full mt-3" placeholder="Product Description"></textarea><br />
                <input name='price' type="text" placeholder="Product Price" className="input input-bordered w-full mt-3" /><br />
                <input name='quantity' type="text" placeholder="Product Quantity" className="input input-bordered w-full mt-3" /><br />
                <input name='order' type="text" placeholder="Minimum Order" className="input input-bordered w-full mt-3" /><br />
                <input name='img' type="text" placeholder="Product img" className="input input-bordered w-full mt-3" />
                <button type='submit' className="btn glass mt-3 w-1/2 text-green-500">Add Product</button>
            </form>
        </div>
    );
};

export default AddProduct;