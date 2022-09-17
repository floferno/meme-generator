import React from 'react'
import logo from '../images/troll-face.svg'

export default function Header() {
    return (
        <div className="header">
            <div className="header--title">
                <img src={logo} />
                <h1>Meme Generator</h1>
            </div>
            <h2>Get Your Meme or Get Lost!</h2>
        </div>
    )
}
