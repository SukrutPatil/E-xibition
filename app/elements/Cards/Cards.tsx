import React from 'react'
import styles from './Cards.module.scss'

const ExibitionCards = (props: { image: string | undefined; title: string | undefined; desc: string | undefined}) => {
    return (
        <div className={styles.exibitionCards}>
            <div className={styles.background}>
                <img src={props.image} alt="" />
            </div>
            <div className={styles.header}>
                <h2>{props.title}</h2>
            </div>
            <div className={styles.text}>
                <p>{props.desc}</p>
            </div>
        </div>
    )
}

export default ExibitionCards

export const ProcessCard = () =>{
    return(
        <div className={styles.processCard}>
            <div className={styles.background}></div>
            <div className={styles.header}>
                <img src="/images/icons8-artist-100.png" alt="" />
                <h2>For Artists</h2>
            </div>
            <div className={styles.text}>
                <ol>
                    <li>Log In.</li>
                    <li>Upload your artwork and wait for people to place an order.</li>
                    <li>As soon as order is placed send the parcel to respective connoisseure’s address.</li>
                    <li>Wait for payment</li>
                </ol>
            </div>
        </div>
    )
}


