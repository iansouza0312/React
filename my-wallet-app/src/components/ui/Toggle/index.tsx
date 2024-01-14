import React from 'react'
import {Container, Label, ToogleSelector} from "./styles"

const Toogle:React.FC = () => {
  return (
    <Container>
      <Label>ligth</Label>
      <ToogleSelector 
      checked={false}
      uncheckedIcon={false}
      checkedIcon={false}
      onChange={() => console.log("nada")}  
      />
      <Label>dark</Label>
    </Container>
  )
}

export default Toogle