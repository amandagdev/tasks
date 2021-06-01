import { css } from '@emotion/react'
import styled from '@emotion/styled'

const baseStyles = () => css`
  width: 70%;
  margin: 0 auto;
  height: 100vh;
`

const titleStyles = ({ theme }) => css`
  font-size: ${theme.font.heading.fontSize};
  line-height: ${theme.font.heading.lineHeight};
  padding-top: ${theme.spacings.xxlarge};
`

const subTitleStyles = ({ theme }) => css`
  font-size: ${theme.font.large.fontSize};
  line-height: ${theme.font.large.lineHeight};
  padding-top: ${theme.spacings.small};
`

const containerStyles = ({ theme }) => css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${theme.spacings.small} 0;
`

export const Base = styled('main')(baseStyles)
export const Title = styled('h1')(titleStyles)
export const SubTitle = styled('h2')(subTitleStyles)
export const Container = styled('section')(containerStyles)
