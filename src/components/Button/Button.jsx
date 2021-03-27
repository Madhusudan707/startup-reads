import React from 'react'
// import styles from './button.module.css'
const Button = ({text,btnClass,btnFunc,isDisabled}) => {
    return (
        <>
            <button style={{cursor:"pointer"}} className={btnClass} onClick={btnFunc} disabled={isDisabled}>{text}</button>
        </>
    )
}

export default Button
