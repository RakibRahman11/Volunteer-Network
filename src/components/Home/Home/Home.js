import React from 'react';
import Projects from '../Projects/Projects';
import './Home.css'

const Home = () => {
    return (
        <div className='bg-color my-5'>
            <h1 className='text-uppercase'>I grow by helping people in need</h1>
            <Projects></Projects>
        </div>
    );
};

export default Home;