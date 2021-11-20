import React from 'react'
import styles from './SideNav.module.scss'

const SideNav = () => {
    const options = [
        {
            title: 'Your Orders',
            number: 0
        },
        {
            title: 'Wishlist',
            number: 0
        },
        {
            title: 'Sell Your Artwork',
            number: 0
        },
        {
            title: 'My Artwork',
            number: 0
        },
        {
            title: 'Orders for Your Artwork',
            number: 0
        }

    ]
    return (
        <div className={styles.sideNav}>
            <div className={styles.info}>
                <img src="" alt="" />
                <h2>Name</h2>
            </div>
            <div className={styles.options}>
                {options.map((option)=>{
                    return(
                    <div className={styles.optionx} key={option.title}>
                        <h3>{option.title}</h3>
                        <h1>{option.number}</h1>
                    </div>
                    )
                })}
            </div>
        </div>
    )
}

export default SideNav
