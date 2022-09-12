import { BrowserRouter, Routes, Route } from "react-router-dom";
//importar o token
//import { useState } from "react";


//Pegar componentes

import Cadastro from "./Cadastro";
import Home from "./Home";
import Login from "./Login";
import NovaEntrada from "./NovaEntrada";
import NovaSaida from "./NovaSaida";

export default function App(){

    

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/Cadastro" element={<Cadastro/>} />
                <Route path="/Home" element={<Home/>} />
                <Route path="/NovaEntrada" element={<NovaEntrada/>} />
                <Route path="/NovaSaida" element={<NovaSaida/>} />
            </Routes>       
        </BrowserRouter>
    );
}