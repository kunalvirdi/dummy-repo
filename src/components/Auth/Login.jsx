import {Form} from "../../Layout";
import {useEffect, useRef, useState} from "react";
import {signupAction} from "../../store/actionSlice.js";
import {useDispatch, useSelector} from "react-redux";
import {modeAction} from "../../store/authSlice.js";

const Login=()=>{
	const Dispatch=useDispatch();
	const initialState={email:'',password:''}
	const [formState,setFormState]=useState(initialState);

	const {error,response}=useSelector(state=>state.action);

	if(error && response!==''){
		setTimeout(()=>{
			Dispatch(signupAction.resetResponse())
		},2000)
	}

	useEffect(() => {
		if(!error){
			Dispatch(signupAction.resetResponse())
			Dispatch(modeAction.setLoggedIn(true))
			Dispatch(modeAction.setEmail(formState.email))
		}
	}, [formState, setFormState, Dispatch, error]);
	const emailHandler=(e)=>{
		setFormState( {...formState, email: e.target.value})
	}
	const passwordHandler=(e)=>{
		setFormState({...formState,password: e.target.value})
	}
	const submitHandler=(e)=>{
		e.preventDefault();
		Dispatch(signupAction.login(formState))
	}
	return(
		<Form error={error} response={response} formState={formState} handlers={{submitHandler,emailHandler,passwordHandler}} Signup={false}/>
	)
}
export default Login