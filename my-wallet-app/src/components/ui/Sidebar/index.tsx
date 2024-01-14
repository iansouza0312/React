import React from 'react'
import logo from "../../../assets/logo.png"
import {MdDashboard, MdArrowUpward, MdArrowDownward, MdExitToApp} from "react-icons/md";
import {Container, Header, LogoImg, Title, MenuContainer, MenuItem} from "./styles"

const Sidebar:React.FC = () => {
  return (
    <Container>
      <Header>
        <LogoImg src={logo} alt="my-wallet-app-logo"/>
        <Title>My Wallet</Title>
      </Header>

      <MenuContainer>
        <MenuItem href="#">
          <MdDashboard />
          Dashbaord
        </MenuItem>
        <MenuItem href="#">
          <MdArrowUpward />
          Entradas
        </MenuItem>
        <MenuItem href="#">
          <MdArrowDownward />
          Saidas
        </MenuItem>
        <MenuItem href="#">
          <MdExitToApp />
          Sair
        </MenuItem>
      </MenuContainer>
    </Container>
  )
}

export default Sidebar