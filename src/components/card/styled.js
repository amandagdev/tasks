import { css } from '@emotion/react'
import styled from '@emotion/styled'

const containerStyles = ({ theme }) => css`
  display: flex;
  flex-direction: column;
  border: 1px solid ${theme.colors.gray};
  border-radius: 0.3rem;
  padding: ${theme.spacings.small};
  position: relative;
  height: 9.375rem;
  width: 100%;
`

const headerStyles = () => css`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 3rem;
  width: 100%;
`

const titleStyles = ({ theme }) => css`
  font-size: ${theme.font.medium.fontSize};
`
const footerStyles = () => css`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  position: absolute;
  bottom: 0;
  width: 100%;
`

export const Container = styled('div')(containerStyles)
export const Header = styled('div')(headerStyles)
export const Title = styled('h3')(titleStyles)
export const Footer = styled('div')(footerStyles)
