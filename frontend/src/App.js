import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

//Components
import HomePage from "./components/HomePage";
import Register from "./components/Register";

import "./components/Styles.css";


const App = ()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} exact/>
                <Route path="/register" element={<Register isLogin={false} />} exact/>
                <Route path="/login" element={<Register isLogin={true} />} exact/>
            </Routes>
        </BrowserRouter>
    )
};

export default App;