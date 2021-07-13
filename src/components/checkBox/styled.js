import { css } from '@emotion/react'
import styled from '@emotion/styled'

const WrapperStyles = ({ theme }) => css`
  display: flex;
  & label {
    margin-left: ${theme.spacings.xsmall};
  }
`

const labelStyles = () => css`
  cursor: pointer;
`

const checkStyles = ({ theme }) => css`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1rem;
  height: 1rem;
  border-radius: 0.2rem;
  border: 1px solid ${theme.colors.gray};
  position: relative;
  outline: none;
  appearance: none;
  transition: background border 0.1s ease-in-out;

  &:before {
    content: '';
    width: 0.2rem;
    height: 0.5rem;
    border: 0.2rem solid ${theme.colors.primary};
    border-top: 0;
    border-left: 0;
    bottom: 0.1rem;
    transform: rotate(45deg);
    opacity: 0;
    position: absolute;
    transition: background border 0.1s ease-in-out;
  }

  &:focus {
    box-shadow: 0 0 0.5rem ${theme.colors.gray};
  }

  &:checked {
    &:before {
      opacity: 1;
    }
  }
`

export const Wrapper = styled('div')(WrapperStyles)
export const Label = styled('label')(labelStyles)
export const Check = styled('input')(checkStyles)
