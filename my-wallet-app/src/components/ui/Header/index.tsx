import React from 'react'
import {Container, Profile, Message, Username} from "./styles"
import Toogle from '../Toggle'

const Header:React.FC = () => {
  return (
    <Container>
      <Toogle />
      <Profile>
        <Message>Ola, seja bem-vindo(a)</Message>
        <Username>Ian Souza</Username>
      </Profile>
    </Container>
  )
}

export default Header