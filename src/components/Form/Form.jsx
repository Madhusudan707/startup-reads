import React from 'react'
import styles from './form.module.css'
import Button from '../Button/Button'
const Form = ({headerText,pt1,pt2,pt3,pt4,pt5,pt6,btnText,isDisplay}) => {
    return (
		<div className={styles.form_main}>
			<h3>{headerText}</h3>
			
				<input type='text' placeholder={pt1}/>
				<input type='text' placeholder={pt2}/>
				<input type='text' placeholder={pt3}/>
				<input type='text' placeholder={pt4}/>
				<input type='text' placeholder={pt5} style={{display:isDisplay}}/>
				<input type='text' placeholder={pt6} style={{display:isDisplay}}/>
				<br/>
				<Button text={btnText} btnClass="btn btn-secondary"/>
			
		</div>
        
    )
}

export default Form
