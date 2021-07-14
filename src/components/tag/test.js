import React from 'react'
import Tag from './index'
import { renderWithTheme } from '../../utils/tests/helpers'
import { screen } from '@testing-library/react'

describe('<Tag />', () => {
  it('should render tag', () => {
    renderWithTheme(<Tag tag="planning" />)
    screen.logTestingPlaygroundURL()

    expect(screen.getByText(/planning/i)).toBeInTheDocument()
  })
})
