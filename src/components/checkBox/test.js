import React from 'react'
import CheckBox from './index'
import userEvent from '@testing-library/user-event'
import { screen, waitFor } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'

describe('<CheckBox>', () => {
  it('should render the checkbox', () => {
    renderWithTheme(<CheckBox label="click" id="check" />)

    expect(screen.getByRole('checkbox')).toBeInTheDocument()
    expect(screen.getByLabelText('click')).toBeInTheDocument()
    expect(screen.getByText('click')).toHaveAttribute('for', 'check')
  })

  it('should dispacth onCheck when status changes', async () => {
    const onCheck = jest.fn()

    renderWithTheme(<CheckBox onCheck={onCheck} />)

    expect(onCheck).not.toHaveBeenCalled()

    expect(screen.getByRole('checkbox')).not.toBeChecked()

    userEvent.click(screen.getByRole('checkbox'))

    expect(screen.getByRole('checkbox')).toBeChecked()

    await waitFor(() => {
      expect(onCheck).toBeCalledTimes(1)
    })
  })
})
