import { css } from '@emotion/react'
import styled from '@emotion/styled'

const baseTagStyles = ({ theme }) => css`
  font-size: 0.9rem;
  font-weight: ${theme.font.bold};
  padding: ${theme.spacings.xxsmall};
`

export const BaseTag = styled('span')(baseTagStyles)
