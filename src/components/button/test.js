import React from 'react'
import Button from './index'
import userEvent from '@testing-library/user-event'
import { renderWithTheme } from '../../utils/tests/helpers'
import { screen } from '@testing-library/react'

describe('<Button/>', () => {
  it('should render the button', () => {
    renderWithTheme(<Button />)

    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('should render props color', () => {
    renderWithTheme(<Button backgroundColor="salmon" />)

    expect(screen.getByRole('button')).toHaveStyle('backgroundColor: #EB6C5D')
  })

  it('should render props size', () => {
    renderWithTheme(<Button size="small" />)

    expect(screen.getByRole('button')).toHaveStyle({
      height: '2rem',
      fontSize: '1rem',
      padding: '.75rem 1rem'
    })
  })

  it('should click', () => {
    const onClick = jest.fn()

    renderWithTheme(<Button onClick={onClick} />)

    userEvent.click(screen.getByRole('button'))

    expect(onClick).toBeCalledTimes(1)
  })
})
