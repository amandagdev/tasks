import React from 'react'
import Button from '../button'
import Tag from '../tag'
import { Container, Header, Title, Footer } from './styled.js'

const Card = ({ children, title, textButton, ...props }) => {
  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        {textButton && <Button {...props}> {textButton} </Button>}
      </Header>
      <Footer>{children}</Footer>
      <Footer>
        <Tag tag="planning" />
        <Tag tag="planning" />
        <Tag tag="planning" />
        <Tag tag="planning" />
        <Tag tag="planning" />
        <Tag tag="planning" />
        <Tag tag="planning" />
        <Tag tag="planning" />
        <Tag tag="planning" />
        <Tag tag="planning" />
        <Tag tag="planning" />
        <Tag tag="planning" />
        <Tag tag="planning" />
      </Footer>
    </Container>
  )
}

export default Card
