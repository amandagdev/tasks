import React, { useState } from 'react'
// import PropTypes from 'prop-types'
import { Wrapper, Label, Check } from './styled'

const CheckBox = ({ id = '', label, value, isChecked = false, onCheck }) => {
  const [checked, setChecked] = useState(isChecked)

  const onChange = () => {
    setChecked((status) => !status)

    if (onCheck) {
      onCheck(checked)
    }
  }

  return (
    <Wrapper>
      <Check
        id={id}
        type="checkbox"
        onChange={onChange}
        checked={checked}
        value={value}
      />
      {label && <Label htmlFor={id}>{label}</Label>}
    </Wrapper>
  )
}

export default CheckBox

CheckBox.propTypes = {}

CheckBox.defaultProps = {}
