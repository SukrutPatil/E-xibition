import Footer from '@components/footer/Footer'
import { ProcessCard } from '@element/Cards/Cards'
import React from 'react'
import styles from './Process.module.scss'

const Process = () => {
    return (
        <div className={styles.process}>
            <h1>This is How it Works...</h1>
            <div className={styles.cards}>
                <ProcessCard/>
                <ProcessCard/>
            </div>
        </div>
    )
}

export default Process
