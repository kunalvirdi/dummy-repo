import {createSlice} from "@reduxjs/toolkit";

const authSlice=createSlice({
	name:'mode',
	initialState:{
		isSignup:false,
		loggedIn:false,
		email:''
	},
	reducers:{
		setIsSignup(state,action){
			state.isSignup=action.payload
		},
		setLoggedIn(state,action){
			state.loggedIn=action.payload
		},
		setEmail(state,action){
			state.email=action.email
		}
	}
})
export const modeAction=authSlice.actions;
export default authSlice