

import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Hello from '../hello'

test('loads and displays greeting', async () => {
  // ARRANGE
  render(<Hello />)

  // ACT
  await screen.findByText('Hello')

  // ASSERT
  // expect(screen.getByRole('heading')).toHaveTextContent('hello there')
  // expect(screen.getByRole('button')).toBeDisabled()
})