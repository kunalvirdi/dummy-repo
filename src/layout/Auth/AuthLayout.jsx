import styles from './authLayout.module.css'

// eslint-disable-next-line react/prop-types
const AuthLayout=({children,isSignup})=> {
	return (
		<div className={styles.auth}>
			{/* eslint-disable-next-line react/prop-types */}
			<h1 className={styles.heading}>{!isSignup?'Login':'Signup'} form</h1>
			{children}
		</div>
	)
}
export default AuthLayout;