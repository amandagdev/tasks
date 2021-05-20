import React from 'react'
import CheckBox from '../components/checkBox'
import Input from '../components/input'
import { Base, Title, SubTitle, Container } from './styled'

const Task = () => {
  const OnCheck = (a) => {
    console.log(a)
  }
  return (
    <Base>
      <Title>tasks</Title>
      <SubTitle>very useful tools to remember</SubTitle>
      <Container>
        <Input />
        <CheckBox id="search" label="search for tags" OnCheck={OnCheck} />
      </Container>
    </Base>
  )
}

export default Task
