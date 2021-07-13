import React from 'react'
import Button from '../button'
import { Container, Header, Title } from './styled.js'

const Card = ({ children, title, textButton, ...props }) => {
  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        {textButton && <Button {...props}> {textButton} </Button>}
      </Header>
      {children}
    </Container>
  )
}

export default Card
