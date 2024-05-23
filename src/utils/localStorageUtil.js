export const insertIntoLocalStorage=(user)=>{
	const ls=localStorage.getItem('users')
	const users=ls?JSON.parse(ls):[];
	const isPresent=users.filter(u=>u.email===user.email)
	if(isPresent.length>0){
		return {
			error:true,
			response: 'You are already registered, Please login.'
		}
	}
	if(user.password.length<8){
		return{
			error:true,
			response: "Password must be atleast of 8 characters."
		}
	}
	if(user.password!==user.confirmPassword){
		return {
			error:true,
			response:'Password mismatch'
		}
	}

	users.push(user)
	localStorage.setItem('users',JSON.stringify(users))
	return{
		error:false,
		response: `${user.email} registered successfully, Please login.`
	}
}

export const getUser=(user)=>{
	const ls=localStorage.getItem('users')
	const users=ls?JSON.parse(ls):[];
	const isPresent=users.filter(u=>user.email===u.email)
	if(isPresent.length===0){
		return{
			error:true,
			response:'You are not registered.'
		}
	}
	if(isPresent[0].password!==user.password){
		return{
			error:true,
			response: 'Incorrect Password.'
		}
	}
	return{
		error:false,
		response:'Registered Successfully'
	}
}