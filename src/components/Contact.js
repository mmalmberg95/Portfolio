import React from 'react'
import './Contact.css'
import {Heading} from './Heading';

function Contact() {
    return (
        <div className="contact" id='contact'>
            <Heading text="Contact Me" headingSize = "h1" headingStyle="heading--primary"/>
                <div className="contact__text">
                    <h1>Email me @ mmalmberg95@hotmail.com</h1>
                </div>
        </div>
    )
}

export default Contact
