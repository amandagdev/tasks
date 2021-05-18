import React from 'react'
// import PropTypes from 'prop-types'
import { Label, Check } from './styled'

const CheckBox = ({ id = '', label }) => {
  return (
    <>
      <Check id={id} type="checkbox" />
      {label && <Label htmlFor={id}>{label}</Label>}
    </>
  )
}

export default CheckBox

CheckBox.propTypes = {}

CheckBox.defaultProps = {}
