import React from 'react'
import { Button as ButtonWrapper, Icon } from './styled.js'

function Button({ children, size = 'small', color = 'salmon', icon }) {
  return (
    <ButtonWrapper size={size} color={color}>
      {icon && <Icon>{icon}</Icon>}
      {children && <span>{children}</span>}
    </ButtonWrapper>
  )
}

export default Button
