import React,{useEffect} from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";


//Components
import Form from "../components/Form.js";


const Register = ({isLogin})=>{
    const token = Cookies.get("token");
    const navigate = useNavigate();

    useEffect(()=>{
       if(token){
        navigate("/");
       } 
    }, [token, navigate]);

    return(
        <Form isLogin={isLogin} />
    );
}

export default Register;