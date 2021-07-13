import React from 'react'
import Card from './index'
import { renderWithTheme } from '../../utils/tests/helpers'
import { screen } from '@testing-library/react'

describe('<Card />', () => {
  it('should render the card', () => {
    renderWithTheme(<Card title="Card" />)
    expect(screen.getByRole('heading', { name: /card/i })).toBeInTheDocument()
  })
})
