import React,{useEffect, useState} from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import axios from "axios";

//Components
import Loading from "./Loading";


const HomePage = ()=>{
    const url = "http://localhost:4000/api/homepage";
    const token = Cookies.get("token");
    const navigate = useNavigate();

    const [name, setName] = useState("");

    useEffect(()=>{

        const fetchHomePage = ()=>{
            axios.get(url, {headers: {authorization: token}})
            .then(e => (e.status === 200) ? setName(e.data.name) : null)
            .catch(e => (e.response.data) ? handleError() : null);
        }

        const handleError = ()=>{
            Cookies.remove("token");
            navigate("/register");
        }


        if(!token){
            navigate("/register");
        }else{
            fetchHomePage();
        }
    }, [navigate, token]);

    //Handlers

    const handleClick = ()=>{
        Cookies.remove("token");
        window.location.reload();
    }


    
    

    const Message = ()=>{
        return(
            <section className="section-welcome" style={{background: `url("/images/welcome-bg.jpg")`}}>
                <nav className="welcome-nav">
                <p className="login-msg">You have successfully logged in.</p>
                <button onClick={()=> handleClick()} className="btn-sec">Log Out</button>
                </nav>
                <div className="welcome-msg-container">
                    <h1 className="welcome-msg">Welcome <span>{name}</span></h1>
                </div>
            </section>
        )
    }

    return(
        <section className="section-homepage">
            {(name.length > 0) ? <Message /> : <Loading />}
        </section>
    )
}

export default HomePage;