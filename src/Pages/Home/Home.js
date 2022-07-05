import React from 'react';
import Banner from './Banner';
import CustomerReviews from './CustomerReviews';
import Specifications from './Specifications';
import SuccessSummery from './SuccessSummery';
import TopBought from './TopBought';

const Home = () => {
    return (
        <div>
            <Banner/>
            <TopBought />
            <Specifications />
            <SuccessSummery/>
            <CustomerReviews/>
        </div>
    );
};

export default Home;