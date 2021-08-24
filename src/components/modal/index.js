import React from 'react'
import { Overlay, ModalWrapper, Header, Icon, Title } from './styled'

const Modal = ({
  size = 'medium',
  title = 'add new tool',
  icon,
  children,
  ...props
}) => {
  console.log('testeteste')
  return (
    <Overlay>
      <ModalWrapper size={size}>
        <Header>
          {icon && <Icon>{icon}</Icon>}
          <Title> {title} </Title>
        </Header>
        {children}
      </ModalWrapper>
    </Overlay>
  )
}

export default Modal
