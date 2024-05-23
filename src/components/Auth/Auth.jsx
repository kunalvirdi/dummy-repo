import {AuthLayout, ToggleButton} from "../../Layout/index.js";
import {Login, Signup} from "../index.js";
import {useSelector} from "react-redux";
const Auth=()=>{
	const isSignup=useSelector(state=>state.mode.isSignup)
	return(
		<AuthLayout isSignup={isSignup}>
			<ToggleButton/>
			{!isSignup?<Login/>:<Signup/>}
		</AuthLayout>
	)
}
export default Auth