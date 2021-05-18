import { css } from '@emotion/react'
import styled from '@emotion/styled'

const inputStyles = ({ theme }) => css`
  border: 1px solid ${theme.colors.gray};
  border-radius: 0.3rem;
  padding: ${theme.spacings.xsmall};
`

export const Input = styled('input')(inputStyles)
