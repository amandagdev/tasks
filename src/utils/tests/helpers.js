import React from 'react'
import theme from '../../theme'
import { ThemeProvider } from '@emotion/react'
import { render } from '@testing-library/react'

export const renderWithTheme = (children) => {
  render(<ThemeProvider theme={theme}>{children}</ThemeProvider>)
}
