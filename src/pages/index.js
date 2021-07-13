import React from 'react'
import CheckBox from '../components/checkBox'
import Input from '../components/input'
import Button from '../components/button'
import Card from '../components/card'
import { FaSearch, FaTimes, FaClosedCaptioning } from 'react-icons/fa'
import {
  Base,
  Title,
  SubTitle,
  Container,
  Header,
  WrapperButton
} from './styled'

const Task = () => {
  const onChange = (a) => {
    console.log(a)
  }
  return (
    <Base>
      <Title>tasks</Title>
      <SubTitle>very useful tools to remember</SubTitle>
      <Container>
        <Header>
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
        </Header>
        <Card
          title="Notion"
          textButton="remover"
          icon={<FaClosedCaptioning />}
        />
      </Container>
    </Base>
  )
}

export default Task
