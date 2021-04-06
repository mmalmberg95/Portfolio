import React from 'react';
import {Heading} from './Heading';
import '../App.css';
import './Hero.css';

function Hero(){
    return(
        <div className="hero__container">
            <div className="hero__outline">
                <Heading 
                    text="Matt Malmberg" 
                    headingSize = "h1"
                    headingStyle = "heading--plain" />
                <p>Web Developer</p>
                {/* <div className="links__container">
                    <img class='links' src="/images/github.png" alt="github_logo"/>
                </div> */}
            </div>
        </div>
    )
}

export default Hero