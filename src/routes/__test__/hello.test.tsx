

import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Hello from '../hello'
import { createMemoryRouter, RouteObject, RouterProvider } from 'react-router-dom'

test('loads and displays greeting', async () => {
  const FAKE_EVENT = { name: "test event" };
  const routes: RouteObject[] = [
    {
      path: "/",
      element: <Hello />,
      loader: () => FAKE_EVENT, // ← ここがあるかないかで変わる

    }
  ];

  const router = createMemoryRouter(routes, {
    initialEntries: ["/"],
    initialIndex: 1,
  });

  // ARRANGE
  render(<RouterProvider router={router} />)

  // ACT
  const e = await screen.findByText('Hello')

  expect(e).toBeTruthy()
})