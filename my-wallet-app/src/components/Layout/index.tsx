import React from 'react'
import Header from '../ui/Header'
import Sidebar from '../ui/Sidebar'
import Content from '../ui/Content'

import {Container} from "./styles"

const Layout:React.FC = () => {
  return (
    <Container>
      <Header />
      <Sidebar />
      <Content />
    </Container>
  )
}

export default Layout