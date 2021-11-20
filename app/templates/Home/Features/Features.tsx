import Feature from '@element/Feature/Feature'
import React from 'react'
import styles from './Features.module.scss'

const Features = () => {
    const features = [
        {
            image: "/images/icons8-butterfly-100.png",
            title: "No Restrictions"
        },
        {
            image: "/images/icons8-truck-100.png",
            title: "Pay On Delivery"
        },
        {
            image: "/images/icons8-watch-100.png",
            title: "24 Hours Support"
        }
    ]
    return (
        <div className={styles.features}>
            <div className={styles.featureContainer}>
                {features.map((feature) => <Feature key={feature.title} image={feature.image} title={feature.title}/>)}
            </div>
        </div>
    )
}

export default Features
