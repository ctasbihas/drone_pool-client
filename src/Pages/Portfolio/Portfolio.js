import React from 'react';

const Portfolio = () => {
    return (
        <div className='mx-10 mb-20'>
            <h1 className='text-3xl font-bold text-green-600 text-center mt-3'>My Portfolio</h1>
            <div className="divider"></div>
            <div>
                <h2 className='text-2xl'>Name: CHOWDHURY TASBIH AHMED SIDDIQUE</h2>
                <h2 className='text-2xl'>Email: tasbihhmd@gamil.com</h2>
                <h2 className='text-2xl'>Education: Junior School Certificate</h2>
                <h2 className='text-2xl'>Technological Skills: (Web Developer) [HTML, CSS, JavaScript, ReactJS, NodeJS, MongoDB, ExpressJs].</h2>
                <div>
                    <h2 className='text-2xl'>Projects I have done yet.</h2>
                    <h3 className='text-2xl'>1. <a href='https://ctas-react-calculator.netlify.app/' className='link link-accent'>React Calculator</a></h3>
                    <br />
                    <h3 className='text-2xl'>2. <a href='https://ctas-react-calculator.netlify.app/' className='link link-accent'>React Calculator</a></h3>
                    <br />
                    <h3 className='text-2xl'>3. <a href='https://ctas-react-calculator.netlify.app/' className='link link-accent'>React Calculator</a></h3>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;