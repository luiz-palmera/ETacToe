import React from "react";
import styled from "styled-components";



const TitleWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #0D0106;
    border-radius: 15px;
    width: 300px;
    border: 0.2rem solid #545F4F;
`

const Title = styled.h1`
    color: #545F4F;
    font-size: 30px;
    font-weight: 800;
    text-align: center;
`


export const MainTitle = () => {
    return(
        <TitleWrapper>
            <Title>
                E-TAC-TOE
            </Title>
        </TitleWrapper>
    )
}