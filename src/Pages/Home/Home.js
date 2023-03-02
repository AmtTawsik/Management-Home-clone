import React from 'react';
import Hero from '../Hero/Hero';
import Feature from '../Feature/Feature';
import Accordian from '../Accordian/Accordian';
import Carasol from '../Carasol/Carasol';
import CTA from '../CTA/CTA';
import Social from '../Social/Social';
import Prising from '../Prising/Prising';
import ContactUs from '../ContactUs/ContactUs';
import Smarter from '../Smarter/Smarter';
import Money from '../Money/Money';
import Subscribe from '../Subscribe/Subscribe';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Social></Social>
            <Feature></Feature>
            <Smarter></Smarter>
            <Money></Money>
            <Subscribe></Subscribe>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;