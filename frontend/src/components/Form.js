import React,{useRef} from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate, Link} from "react-router-dom";

const Form = ({isLogin})=>{

    const url = isLogin ? "https://simple-login-app.onrender.com/api/login" : "https://simple-login-app.onrender.com/api/register";
    
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    const rePassword = useRef(null);

    const navigate = useNavigate();


    //Handlers

    const handleError =(e)=>{
        alert(e);
    }

    const handelSuccess = (e)=>{
        Cookies.set("token", e);
        navigate("/");
    }



    const postUser = ()=>{
        const data = isLogin ? {email: email.current.value, password: password.current.value} : {email: email.current.value, password: password.current.value, name: name.current.value} 
        axios.post(url, {...data})
        .then(e => (e.status === 200) ? handelSuccess(e.data.token) : null)
        .catch(e => (e.response.data) ? handleError(e.response.data.msg) : null);
    }

    const handleSubmit = ()=>{
        if(isLogin){
            if(!email.current.value || !password.current.value){
                alert("Fill all the required fileds.");
            }else{
                postUser();
            }
        }else{
            if(!email.current.value || !password.current.value || !name.current.value || !rePassword.current.value){
                alert("Fill all the required fileds.");
            }else{
                if(password.current.value === rePassword.current.value){
                    postUser();
                }else{
                    alert("Password should be same in both fields.");
                }
            }
        }
    }

    //Components
    const InputFields = ()=>{
        return(
            <div className="form-inputs-container">
                {!isLogin ? <div className="form-inputs">
                    <p className="input-label">Name</p>
                    <input ref={name} type="text" className="form-input"></input>
                </div> : null}
                <div className="form-inputs">
                    <p className="input-label">Email</p>
                    <input ref={email} type="email" className="form-input"></input>
                </div>
                <div className="form-inputs">
                    <p className="input-label">Password</p>
                    <input ref={password} type="password" className="form-input"></input>
                </div>
                {!isLogin ? <div className="form-inputs">
                    <p className="input-label">Repete Password</p>
                    <input ref={rePassword} type="password" className="form-input"></input>
                </div> : null}
            </div>
        )
    }

    const RouteLink = ()=>{
        if(isLogin){
            return(
                <>
                    <p className="route-text">Don't have an account? <Link className="route-link" to="/register">Create One.</Link></p>
                </>
            )
        }else{
            return(
                <>
                    <p className="route-text">Already have an account? <Link className="route-link" to="/login">Log In.</Link></p>
                </>
            ) 
        }
    }



    return(
        <section className="section-form">
            <div className="form-container">
                <div className="form-left-container">
                    <h1>{isLogin ? "Login to your account." : "Create an Account."}</h1>
                    <InputFields />
                    <button onClick={handleSubmit} className="btn-primary">{isLogin ? "Log IN" : "Create Account"}</button>
                    <RouteLink />
                </div>
                <div className="form-right-container">
                    <img src="/images/bg.jpg" alt="building-architecture"></img>
                </div>
            </div>
        </section>
    )
};

export default Form;