import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import TelaHome from "../pages/tela_home/Tela_home.js";
import TelaLogin from "../pages/tela_login/Tela_login.js";
import TelaCadastro from "../pages/tela_cadastro/Tela_cadastro.js"

const RouterProjeto = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<TelaLogin/>} />
                <Route path="/home" element={<TelaHome/>} />
                <Route path="/cadastro" element={<TelaCadastro/>}/>
            </Routes>
        </Router>
    )
}
export default RouterProjeto;