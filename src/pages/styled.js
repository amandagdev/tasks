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
  padding: ${theme.spacings.small} 0;
  justify-content: space-between;
  width: 100%;

  & div {
    display: flex;
    align-items: center;
  }

  & input {
    margin-left: ${theme.spacings.small};
  }
`

const wrapperButtonStyles = () => css`
  width: 10%;
`

export const Base = styled('main')(baseStyles)
export const Title = styled('h1')(titleStyles)
export const SubTitle = styled('h2')(subTitleStyles)
export const Container = styled('div')(containerStyles)
export const WrapperButton = styled('div')(wrapperButtonStyles)
