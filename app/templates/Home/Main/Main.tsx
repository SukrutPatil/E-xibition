import ExibitionCards from '@element/Cards/Cards'
import React from 'react'
import styles from './Main.module.scss'

const Main = () => {
    const catagories = [
        {
            title: "Monochrome",
            image: "/images/sketch.png",
            desc: "All black and white arts like sketches and paintings that will give a classy and rich look to your walls."
        },
        {
            title: "Colourful",
            image: "/images/paint.png",
            desc: "Make your walls tell story with all the colorful paintings."
        },
        {
            title: "3-D",
            image: "/images/3dart.png",
            desc: "All 3-D artwork that will make you and viewers go crazy over it’s design."
        },
        {
            title: "Photographs",
            image: "/images/photograph.png",
            desc: "Amazing views, animals and lot more caught on camera."
        },
    ]
    return (
        <div className={styles.main}>
            {catagories.map((catagory) =>{
                return (
                <ExibitionCards key={catagory.title} title={catagory.title} image={catagory.image} desc={catagory.desc}/>
                )
            })}
            
        </div>
    )
}

export default Main
