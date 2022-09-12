import styled from "styled-components";
import { useNavigate } from "react-router-dom";
//import axios from "axios";
//import { useContext } from "react";
//importar token

//import { useState } from "react";

export default function Login(){

    
    return(

        <TelaLogin>
            <p>MyWallet</p>
            <input placeholder="email"/>
            <input placeholder="senha"/>
            <ButtonEntrar>Entrar</ButtonEntrar>
            <LinkCadastro>Primeira vez? Cadastre-se!</LinkCadastro>
        </TelaLogin>
    );
};

const TelaLogin = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #E5E5E5;
    input{

    }

`
const ButtonEntrar = styled.div`
    height: 46px;
    width: 326px;
    left: 23px;
    top: 375px;
    border-radius: 5px;
    background-color: #A328D6;


`
const LinkCadastro = styled.div`
    height: 18px;
    width: 191px;
    left: 92px;
    top: 457px;
    border-radius: nullpx;
    background-color: #FFFFFF;


`