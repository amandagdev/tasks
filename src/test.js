import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('<Footer/>', () => {
  it('should render the footer', () => {
    const { container } = render(<App />)
    const app = screen.getByText(/ola/i)
    expect(app).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
