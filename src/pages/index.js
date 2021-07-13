import React from 'react'
import CheckBox from '../components/checkBox'
import Input from '../components/input'
import Button from '../components/button'
import { FaSearch, FaTimes } from 'react-icons/fa'
import { Base, Title, SubTitle, Container, WrapperButton } from './styled'

const Task = () => {
  const onChange = (a) => {
    console.log(a)
  }
  return (
    <Base>
      <Title>tasks</Title>
      <SubTitle>very useful tools to remember</SubTitle>
      <Container>
        <div>
          <Input onChange={onChange} icon={<FaSearch />} />
          <CheckBox id="search" label="search for tags" />
        </div>
        <WrapperButton>
          <Button
            icon={<FaTimes color="black" size="18px" />}
            onClick={onChange}
          >
            add
          </Button>
        </WrapperButton>
      </Container>
    </Base>
  )
}

export default Task
