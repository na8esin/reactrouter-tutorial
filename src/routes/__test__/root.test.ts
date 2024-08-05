import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import Root from '../root'

test('loads and displays greeting', async () => {
  // ARRANGE
  render(<Root />)

  // ACT
  await screen.findByText('React Router Contacts')

  // ASSERT
  // expect(screen.getByRole('heading')).toHaveTextContent('hello there')
  // expect(screen.getByRole('button')).toBeDisabled()
})