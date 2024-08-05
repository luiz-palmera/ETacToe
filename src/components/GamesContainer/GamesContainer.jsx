import React from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 240px;
`;

const Title = styled.h2`
    color:#545F4F;
    font-size: 13px;
    font-weight: 800;
    margin-left: 8px;
`
const ContentBox = styled.div`
    display: flex;
    height: 450px;
    width: 200px;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    margin-left: 0px;
    gap: 10px;
`;

const Content1 = styled.img`
    background-color: #0D0106;
    width: 100%;
    height: 30%;
    border-radius: 25px;
    border: solid #545F4F; 
    transition: width 0.2s;
    &:hover{
        width: 150%;
        border-radius: 25px;
        transition-delay: 0s;
        transform: scale(1.1);
        opacity: 0.6;;
    }

`;
const Content2 = styled(Content1)``;
const Content3 = styled(Content1)``;


export const GamesContainer = () => {
    return(
        <Wrapper>
            <Title>ESCOLHA A MODALIDADE</Title>
            <ContentBox>
                <Content1 src='src\assets\torcidaCS.jpg'/>
                <Content2/>
                <Content3/>
            </ContentBox>
        </Wrapper>
    )
}