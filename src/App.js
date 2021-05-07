import React from 'react'
import { ThemeProvider } from '@emotion/react'
import theme from './theme.js'

function App() {
  return <ThemeProvider theme={theme}>ola</ThemeProvider>
}

export default App
