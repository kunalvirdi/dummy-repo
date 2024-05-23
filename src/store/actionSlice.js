import {createSlice} from "@reduxjs/toolkit";
import {getUser, insertIntoLocalStorage} from "../utils/localStorageUtil.js";

const actionSlice=createSlice({
	name:'action',
	initialState:{
		error:true,
		response:''
	},
	reducers:{
		signup(state,action){
			state=insertIntoLocalStorage(action.payload);
			return state;
		},
		resetResponse(state){
			state.response='';
			state.error=true
		},
		login(state,action){
			state=getUser(action.payload)
			return state;
		}
	}
})
export const signupAction=actionSlice.actions;
export default actionSlice;