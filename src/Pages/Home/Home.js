import React from 'react';
import Banner from './Banner';
import CustomerReviews from './CustomerReviews';
import Specifications from './Specifications';
import SuccessSummery from './SuccessSummery';
import Products from './Products';

const Home = () => {
    return (
        <div>
            <Banner />
            <Products />
            <Specifications />
            <SuccessSummery />
            <CustomerReviews />
        </div>
    );
};

export default Home;