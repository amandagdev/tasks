import React from 'react'
import { Button as ButtonWrapper, Icon } from './styled.js'

function Button({
  children,
  size = 'small',
  backgroundColor = 'salmon',
  icon,
  onClick
}) {
  return (
    <ButtonWrapper
      size={size}
      backgroundColor={backgroundColor}
      onClick={onClick}
    >
      {icon && <Icon>{icon}</Icon>}
      {children && <span>{children}</span>}
    </ButtonWrapper>
  )
}

export default Button
