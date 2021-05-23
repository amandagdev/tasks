import React, { useState } from 'react'
// import PropTypes from 'prop-types'
import { Input as InputBase, InputWrapper, Icon } from './styled'

const Input = ({ id, onChange, label, icon, ...props }) => {
  const [value, setValue] = useState('')

  const onInput = (e) => {
    const text = e.target.value

    setValue(text)

    if (onChange) {
      onChange(text)
    }
  }

  return (
    <>
      {label && <label htmlFor={id}>{label}</label>}
      <InputWrapper>
        {icon && <Icon>{icon}</Icon>}
        <InputBase
          id={id}
          type="text"
          value={value}
          onChange={(e) => onInput(e)}
          {...props}
        />
      </InputWrapper>
    </>
  )
}

export default Input

Input.propTypes = {}

Input.defaultProps = {}
