import React from 'react';
import styled from 'styled-components';
import Menu from '../../assets/menu.svg'
import { useState } from 'react';
import { DrawerContent } from '../DrawerContent/DrawerContent';
import { Drawer } from '@mui/material';


const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  background-color: #0D0106;
  margin: 0;
  padding: 0;
  flex-direction: row;
  border-bottom: solid #545F4F;
`
const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

export const Title = styled.h1`
  font-size: 18px;
  color: #545F4F;  
  font-weight: 800;
  justify-content: flex-start;
  margin: 0;
  padding-left: 10px;
  padding-top: 7px;
`

const MenuIcon = styled.img`
  padding-left: 20px;
  width:30px;
  transition: width 0.3s;
  &:hover{
      width: 33px;
      transition-delay: 0s;
  }
`

export const Header = ({...props}) => {
  const [open, setOpen] = useState(false);
  
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  return (
    <Wrapper>
      <TitleWrapper>
        <MenuIcon src={Menu} onClick={toggleDrawer(true)} />
        <Drawer
          PaperProps={{
            sx: {
              backgroundColor: "#0D0106"
            }
          }}
          open={open}
          onClose={toggleDrawer(false)} >
          <DrawerContent />
        </Drawer>
        {(props.title === true) ? (<Title>
          E-TAC-TOE
        </Title>) : null}
      </TitleWrapper>
    </Wrapper>
  )
}
