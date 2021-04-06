import React from 'react'
import Card from './Card'
import './CardSection.css'
import {Heading} from './Heading'

function CardSection() {
    return(
        <>
        <div className="cards" id="projects">
            <Heading 
            text="Projects" 
            headingSize = "h1"
            headingStyle = "heading--primary" />
                <div className="cards__display">
                    <Card 
                        href= 'https://github.com/mmalmberg95/Spotify-Favorites' 
                        id="one"
                        title="Spotify Favorites"
                        text="A simple app using the Spotify API. Capable of displaying
                        a profiles most listened to artists and songs over specified time
                        frames."
                        tag1="Node.js"
                        tag2="React"
                        tag3="Spotify API" />
                    <Card 
                        href = 'https://github.com/mmalmberg95/Netflix-Clone'
                        id="two"
                        title="Netflix Clone"
                        text="A display-only clone of Netflix using the TMDB API
                        in React."
                        tag1="Node.js"
                        tag2="React"
                        tag3="TMDB API"/>
                    <Card 
                        href = 'https://github.com/mmalmberg95/Tic-Tac-Toe'
                        id="three"
                        title="Tic Tac Toe"
                        text="A simple game of Tic-Tac-Toe built with Angular as 
                        a way of getting to know the framework."
                        tag1="Node.js"
                        tag2="Angular"
                        tag3="CodeSandbox"/>
                </div>
        </div>
        </>
    )
}

export default CardSection