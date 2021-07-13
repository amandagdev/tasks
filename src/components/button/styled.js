import { css } from '@emotion/react'
import styled from '@emotion/styled'

const colors = {
  none: {
    default: 'transparent',
    hover: 'transparent'
  },
  salmon: {
    default: '#EB6C5D',
    hover: '#EB644C'
  }
}

const wrapperModifiers = {
  small: (theme) => css`
    height: 2rem;
    font-size: ${theme.font.small.fontSize};
    padding: ${theme.spacings.small} ${theme.spacings.medium};
  `,
  medium: (theme) => css`
    height: 2.4rem;
    font-size: ${theme.font.medium.fontSize};
    padding: ${theme.spacings.medium} ${theme.spacings.xlarge};
  `,
  fullWidth: () => css`
    width: 100%;
  `
}

const buttonStyles = ({ backgroundColor, theme, size }) => css`
  display: flex;
  align-items: center;
  background: ${colors[backgroundColor].default};
  border-radius: 0.3rem;
  padding: ${theme.spacings.medium} ${theme.spacings.xlarge};

  &:hover {
    background: ${colors[backgroundColor].hover};
  }

  ${size && wrapperModifiers[size](theme)}
`
const iconStyles = ({ theme }) => css`
  display: flex;
  align-items: center;

  svg {
    margin-right: ${theme.spacings.small};
  }
`

export const Icon = styled('span')(iconStyles)
export const Button = styled('button')(buttonStyles)
