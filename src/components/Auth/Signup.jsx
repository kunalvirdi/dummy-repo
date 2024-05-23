import {Form} from "../../Layout/index.js";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {signupAction} from "../../store/actionSlice.js";
import {modeAction} from "../../store/authSlice.js";

const Signup=()=>{
	const Dispatch=useDispatch();
	const initialState={email:'',password:'',confirmPassword:''}
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
			alert('Login successfully..')
			setFormState(initialState)
		}
	}, [formState, setFormState, Dispatch, error]);
	const emailHandler=(e)=>{
		setFormState( {...formState, email: e.target.value})
	}
	const passwordHandler=(e)=>{
		setFormState({...formState,password: e.target.value})
	}
	const confirmPasswordHandler=(e)=>{
		setFormState({...formState,confirmPassword: e.target.value})

	}
	const submitHandler=(e)=>{
		e.preventDefault();
		Dispatch(signupAction.signup(formState))
	}
	return(
		<Form error={error} response={response} formState={formState} handlers={{submitHandler,emailHandler,passwordHandler,confirmPasswordHandler}}  Signup/>
	)
}
export default Signup