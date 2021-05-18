import React from 'react'
import CheckBox from '../components/checkBox'
import Input from '../components/input'
import { Base, Title, SubTitle, Container } from './styled'

const Task = () => {
  return (
    <Base>
      <Title>tasks</Title>
      <SubTitle>very useful tools to remember</SubTitle>
      <Container>
        <Input />
        <CheckBox id="search" label="search for tags" />
      </Container>
    </Base>
  )
}

export default Task
