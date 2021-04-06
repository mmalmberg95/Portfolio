import React from 'react';
import Hero from './Hero';
import CardSection from './CardSection';
import Nav from './Nav';
import About from './About';
import Contact from './Contact'
import './Home.css'


function Home() {
    return (
        <>
        <div className="home"> 
        <div className="home__container">
            <Nav />
            <Hero />
            <About />
            <CardSection />
            <Contact />
        </div>  
        </div> 
        </>
    );
}

export default Home