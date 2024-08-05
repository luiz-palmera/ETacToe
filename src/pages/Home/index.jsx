import React from "react";
import { Header } from "../../components/Header/Header";
import { TicTacToe } from "../../components/TicTacToe/TicTacToe";

export const Home = () =>{
    return(
        <>
            <Header title={true}/>
            <TicTacToe/>
        </>
    )
}