import React from 'react';
import Banner from './Banner';
import Specifications from './Specifications';
import TopBought from './TopBought';

const Home = () => {
    return (
        <div>
            <Banner/>
            <TopBought />
            <Specifications/>
        </div>
    );
};

export default Home;