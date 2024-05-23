import styles from './authLayout.module.css'
import {useDispatch, useSelector} from "react-redux";
import {modeAction} from "../../store/authSlice.js";
const ToggleButton=()=>{
	const Dispatch=useDispatch();
	const isSignup=useSelector(state=>state.mode.isSignup)
	const activeClass=`${styles.active}`
	return(
		<div className={styles.toggle}>
			<div onClick={()=>Dispatch(modeAction.setIsSignup(false))} className={`${styles.button} ${!isSignup && activeClass}`}>Login {
				!isSignup && <div className={`${styles.effect} bg-gradient`}></div>}</div>
			<div onClick={()=>Dispatch(modeAction.setIsSignup(true))} className={`${styles.button} ${isSignup && activeClass}`}>Signup {
				isSignup && <div className={`${styles.effect} bg-gradient`}></div>}</div>
		</div>
	)
}
export default ToggleButton;