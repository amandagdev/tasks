import { css } from '@emotion/react'
import styled from '@emotion/styled'

const sizes = {
  small: () => css`
    width: 30rem;
    height: 10rem;
  `,
  medium: () => css`
    width: 40rem;
    height: 40rem;
  `
}

const overlayStyles = () => css`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  position: absolute;
  z-index: 9;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`
const modalStyles = ({ theme, size }) => css`
  border-radius: 0.2rem;
  background-color: ${theme.colors.white};
  padding: ${theme.spacings.small};
  ${size && sizes[size]()}
`

const headerStyles = ({ theme }) => css`
  display: flex;
  align-items: center;
  padding: ${theme.spacings.small};
`
const iconStyles = ({ theme }) => css`
  display: flex;
  align-items: center;
  margin-right: ${theme.spacings.xsmall};

  svg {
    width: 100%;
  }
`
const titleStyles = ({ theme }) => css`
  font-size: ${theme.font.medium.fontSize};
  font-weight: ${theme.font.bold};
`

export const Overlay = styled('div')(overlayStyles)
export const ModalWrapper = styled('div')(modalStyles)
export const Header = styled('div')(headerStyles)
export const Icon = styled('span')(iconStyles)
export const Title = styled('h1')(titleStyles)
