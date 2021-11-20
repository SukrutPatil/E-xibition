import React from 'react'
import styles from './Feature.module.scss'
const Feature = (props: { image: string | undefined; title: string | undefined}) => {
    return (
        <div className={styles.feature}>
            <img src={props.image} alt="" />
            <h2>{props.title}</h2>
        </div>
    )
}

export default Feature
