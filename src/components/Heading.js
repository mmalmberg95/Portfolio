import React from 'react';
import './Heading.css';

const SIZES = ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
const STYLES = ['heading--plain', 'heading--primary'];

export const Heading = ({text, headingSize, headingStyle}) => {
    
    const checkHeadingStyle = STYLES.includes(headingStyle) ? headingStyle : STYLES[0];

    const checkHeadingSize = SIZES.includes(headingSize) ? headingSize : SIZES[0];
    const Level = checkHeadingSize; 

    return(
    <Level className={`heading ${checkHeadingStyle}`}>{text}</Level>
    );
};