import LogInButton from '@element/Buttons/Buttons'
import React from 'react'
import styles from './Nav.module.scss'


const Nav = () => {
    return (
        <div className={styles.navContainer}>
            <nav className={styles.nav}>
                <div className={styles.logo}>
                    <img src="/E-xibition.svg" alt="" />
                </div>
                <div className={styles.navLinks}>
                    <ul>
                        <li>Home</li>
                        <li>Gallery</li>
                    </ul>
                </div>
                <div className={styles.action}>
                    <LogInButton></LogInButton>
                </div>
            </nav>   
        </div>
    )
}

export default Nav
