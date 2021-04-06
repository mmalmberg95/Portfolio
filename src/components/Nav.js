import React, {useState} from 'react';
import {Link, animateScroll as scroll} from 'react-scroll';
import './Nav.css';

function Nav(){

    const scrollToTop = () => {
        scroll.scrollToTop();
    }

    // const checkPosition = () =>{
    //     if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500){
    //         nav.className="nav__active";
    //     } else{
    //         nav.className ="nav";
    //     }
    // }

    return(
        <>
        <nav className="nav">
            <div className="nav__container">
                 <ul className='nav__menu'>
                    <Link to='/' onClick={scrollToTop} className='nav__item'>
                        Home
                    </Link>
                    <Link to='about' className='nav__item'
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={500}
                        >
                        About
                    </Link>
                    <Link to='projects' className='nav__item'
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={500}
                        >
                        Projects
                        </Link>
                    <Link to='contact' className='nav__item'
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={500}
                        >
                        Contact
                    </Link>
                 </ul>
                 {/* <div className="nav__button">
                        <a href = '../documents/MalmbergResume.pdf' target = "_blank">RESUME</a>
                </div> */}
            </div>
        </nav>
        </>
    )
}

export default Nav