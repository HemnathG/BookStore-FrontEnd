import axios from "axios";

export function signUp(signUpData){
    console.log("services",signUpData);
    try {
        const response = axios.post("",signUpData);
        return response
    } catch (error) {
        return error;        
    }
}

export function signIn(signIndata){
    console.log("services",signIndata);
    try {
        const response = axios.post("http://localhost:8080/admin/login",signIndata);
        return response
    } catch (error) {
        return error;        
    }
}

export function forgetPassword(ForgetPasswordData){
    console.log("services",ForgetPasswordData);
    try {
        const response = axios.post("",ForgetPasswordData);
        return response
    } catch (error) {
        return error;        
    }
}

export function resetPassword(ResetPasswordData){
    console.log("services",ResetPasswordData);
    try {
        const response = axios.post("",ResetPasswordData);
        return response
    } catch (error) {
        return error;        
    }
}