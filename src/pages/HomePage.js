import React from 'react';
import Hero from './../components/Hero/Hero';
import Content from './../components/content/Content';
import Features from '../components/features/Features';
import { partOne, partTwo } from '../data/HeroData';
import { Heading } from '../globalStyles';

const HomePage = () => {
    return (
        <>
            <Hero />
            <Features />
            <Heading id="offer">Our Offer</Heading>
            <Content {...partOne} />
            <Content {...partTwo} />
        
        </>
    );
};

export default HomePage;