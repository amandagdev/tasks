import React, { useState } from 'react'
import CheckBox from '../components/checkBox'
import Input from '../components/input'
import Button from '../components/button'
import Card from '../components/card'
import Modal from '../components/modal'
import { FaSearch, FaTimes, FaCheck } from 'react-icons/fa'
import {
  Base,
  Title,
  SubTitle,
  Container,
  Header,
  WrapperButton,
  WrapperModal,
  WrapperText
} from './styled'

const Task = () => {
  const [visible, setVisible] = useState(false)

  const onChange = (a) => {
    console.log(a)
  }

  const modalShow = () => {
    setVisible((show) => !show)
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
              icon={<FaCheck color="black" size="18px" />}
              onClick={modalShow}
            >
              add
            </Button>
          </WrapperButton>
        </Header>
        <Card
          title="Notion"
          textButton="remover"
          backgroundColor="none"
          icon={<FaTimes color="black" size="18px" />}
        >
          a apresentção então dizia que tudo isso tinha uma unica explicação
          romam! a apresentção então dizia que tudo isso tinha uma unica
          explicação romam! a apresentção então dizia que tudo isso tinha uma
          unica explicação romam!
        </Card>
        {visible && (
          <>
            <Modal icon={<FaCheck color="black" />}>
              <WrapperModal>
                <Input label="Tool name" onChange={onChange} />
                <Input label="Tool link" onChange={onChange} />
                <WrapperText>
                  <p>Tool description</p>
                  <textarea rows="5" cols="65" />
                </WrapperText>
                <Input label="Tags" onChange={onChange} />
                <span>
                  <Button onClick={modalShow}>add tool</Button>
                </span>
              </WrapperModal>
            </Modal>
          </>
        )}
      </Container>
    </Base>
  )
}

export default Task
