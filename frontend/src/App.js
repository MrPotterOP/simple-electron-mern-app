import React from "react";
import {HashRouter, Routes, Route} from "react-router-dom";

//Components
import HomePage from "./components/HomePage";
import Register from "./components/Register";

import "./components/Styles.css";


const App = ()=>{
    return(
        <HashRouter>
            <Routes>
                <Route path="/" element={<HomePage />} exact/>
                <Route path="/register" element={<Register isLogin={false} />} exact/>
                <Route path="/login" element={<Register isLogin={true} />} exact/>
            </Routes>
        </HashRouter>
    )
};

export default App;