import React from "react";
import styled from "styled-components"
import { Link } from "react-router-dom";
import { MainTitle } from "../../components/MainTitle/MainTitle";
import { Header } from "../../components/Header/Header";
import { GamesContainer } from "../../components/GamesContainer/GamesContainer";

const PageContent = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 45px;
    margin-top: 30px;
`


export const Login = () => {
    return(
        <div>
            <Header title={false}/>
            <GamesContainer/>
            <PageContent>
                <MainTitle/>
                <Link to="/home">Home</Link>
            </PageContent>
        </div>
    )
}