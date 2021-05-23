import { css } from '@emotion/react'
import styled from '@emotion/styled'

const inputWrapperStyles = ({ theme }) => css`
  display: flex;
  border: 1px solid ${theme.colors.gray};
  border-radius: 0.3rem;

  &:focus-within {
    box-shadow: 0 0 0.5rem ${theme.colors.gray};
  }
`

const iconStyles = ({ theme }) => css`
  display: flex;
  align-items: center;
  width: 2rem;
  color: ${theme.colors.gray};

  svg {
    width: 100%;
  }
`

const inputStyles = ({ theme }) => css`
  border: none;
  padding: ${theme.spacings.xsmall} ${theme.spacings.xsmall};
  width: 100%;
`

export const InputWrapper = styled('div')(inputWrapperStyles)
export const Icon = styled('div')(iconStyles)
export const Input = styled('input')(inputStyles)
