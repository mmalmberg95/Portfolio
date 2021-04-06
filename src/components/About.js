import React from 'react';
import './About.css';
import {Heading} from './Heading';

function About(){
    return(
        <div className="about" id='about'>
            <Heading text="About Me" headingSize = "h1" headingStyle="heading--primary"/>
            <div className="about__container">
                <div className="about__text">
                    <p>I am a web developer based out of Round Lake, Illinois where 
                        I drink too much coffee but make some cool things along the way. 
                    </p>
                    <br />
                    <p>I'm a creative thinker with an analytical skillset and excellent
                        communications skills that make me a valuable addition to any team. 
                        I've spent the last few years working as a District Technician for
                        my local school district, and I'm eager to begin my career as a developer
                        and grow as a professional. 
                    </p>  
                    <br />
                    <p>A few of the technologies I'm familiar with include
                        React, Angular, Java, Python, and SQL.
                    </p>
                </div>
            </div>

        </div>
    )
}

export default About