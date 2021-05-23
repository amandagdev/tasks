import React from 'react'
import Input from './index'
import userEvent from '@testing-library/user-event'
import { renderWithTheme } from '../../utils/tests/helpers'
import { screen, waitFor } from '@testing-library/react'

describe('<Input>', () => {
  it('should render the input', () => {
    renderWithTheme(<Input />)

    expect(screen.getByRole('textbox')).toBeInTheDocument()
    expect(screen.queryByLabelText('write here')).not.toBeInTheDocument()
  })

  it('should render the label', () => {
    renderWithTheme(<Input label="write here" id="id" />)

    expect(screen.getByLabelText('write here')).toBeInTheDocument()
    expect(screen.getByText('write here')).toHaveAttribute('for', 'id')
  })

  it('should render the placeholder', () => {
    renderWithTheme(<Input placeholder="write here" />)

    expect(screen.getByPlaceholderText('write here')).toBeInTheDocument()
  })

  it('change its value typing', async () => {
    const onChange = jest.fn()

    renderWithTheme(<Input onChange={onChange} />)

    const input = screen.getByRole('textbox')
    const text = 'this is my text'

    userEvent.type(input, text)

    expect(onChange).toBeCalledWith(text)

    await waitFor(() => {
      expect(input).toHaveValue(text)
      expect(onChange).toBeCalledTimes(text.length)
    })
  })
})
