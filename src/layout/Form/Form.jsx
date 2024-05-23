import styles from './form.module.css'
import {Button} from "../";

const Form=({Signup,handlers,formState,error,response})=>{
	return(
		<form onSubmit={handlers.submitHandler} className={`${styles.form} flex direction-column align-center justify-center`}>
			<label className={`${error?styles.error:styles.success}`}>{response}</label>
			<input value={formState.email} onChange={handlers.emailHandler} name='email' className={styles.input} type="email" placeholder="Email Address" required={true}/>
			<input value={formState.password} onChange={handlers.passwordHandler}  name='password' className={styles.input} type="password" placeholder="Password" required={true}/>
			{Signup && <input onChange={handlers.confirmPasswordHandler} value={formState.confirmPassword} name='confirm-password' className={styles.input} type="password" placeholder="Confirm Password" required={true}/>}
			<Button>{Signup?'Signup':'Login'}</Button>
		</form>
	)
}
export default Form