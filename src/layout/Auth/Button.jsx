import styles from './authLayout.module.css'
// eslint-disable-next-line react/prop-types
const Button=({children})=>{
	return(
		<button className={`${styles['submit-button']}`} type='submit'>
			{children}
		</button>
	)
}

export default Button