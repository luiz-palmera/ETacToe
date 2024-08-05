import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    margin-top: 30px;
    display: grid;
    height: 60vh;
    width: 80vh;
    background-color: #545F4F;
    grid-template-columns: 1.5fr 1.5fr 1.5fr 1.5fr;
    grid-template-areas:
        "icon team1 team2 team3"
        "team4 player1 player2 player3"
        "team5 player4 player5 player6"
        "team6 player7 player8 player9";
    text-align: center;
    padding: 0.25rem;
    border: solid #0D0106;
`

const Icon = styled.div`
    background: #1F1918;
    grid-area: icon;
    border: solid #0D0106;
`
const First = styled.div`
    background: white;
    grid-area: team1;
    border: solid #0D0106;
`
const Second = styled.div`
    background: white;
    grid-area: team2;
    border: solid #0D0106;
`
const Third = styled.div`
    background: white;
    grid-area: team3;
    border: solid #0D0106;
`
const Fourth = styled.div`
    background: white;
    grid-area: team4;
    border: solid #0D0106;
`
const Fifth = styled.div`
    background: white;
    grid-area: team5;
    border: solid #0D0106;
`
const Last = styled.div`
    background: white;
    grid-area: team6;
    border: solid #0D0106;
`


export const TicTacToe = () =>{
    return(
        <Container>
            <Icon/>
            <First/>
            <Second/>
            <Third/>
            <Fourth/>
            <Fifth/>
            <Last/>
        </Container>
    )
}