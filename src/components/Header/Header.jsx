import React from 'react'
import styles from './header.module.css'
import Navbar from '../Navbar/Navbar'



const Header = () => {
    return (
        <div className={styles.header} >
           <Navbar/>
        </div>
    )
}

export default Header
