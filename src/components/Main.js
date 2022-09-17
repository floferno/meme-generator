import React from 'react'
import memesData from '../memesData'

export default function Main(props) {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages, setAllMemeImages] = React.useState(memesData)


    function getMeme() {
        const memes = allMemeImages.data.memes
        const randomIndex = Math.floor(Math.random() * memes.length)
        const url = memes[randomIndex].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        })
        )
    }

    function handleChange(event) {
        const { name, value } = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <div className="main">
            <div className="main--input">
                <input
                    placeholder="Top text"
                    type="text"
                    className="main--input-top"
                    name="topText"
                    onChange={handleChange}
                    value={meme.topText}
                />
                <input
                    placeholder="Bottom text"
                    type="text"
                    className="main--input-bottom"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange} />
            </div>
            <button className="main--get-meme" onClick={getMeme}>Get a new meme image</button>
            <div className="main--show-meme">
                <img src={meme.randomImage} className="main--meme" />
                <h1 className="main--meme-text top">{meme.topText}</h1>
                <h1 className="main--meme-text bottom">{meme.bottomText}</h1>
                <h2></h2>
            </div>
        </div>
    )
}
