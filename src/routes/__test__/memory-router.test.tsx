/**
 * @jest-environment jsdom
 */

import {
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";
import {render, screen, waitFor} from '@testing-library/react'
import '@testing-library/jest-dom'
import Hello from '../hello'

test('loads and displays greeting', async () => {
  const FAKE_EVENT = { name: "test event" };
  const routes: RouteObject[] = [
    {
      path: "/events/:id",
      element: <Hello />,
      loader: () => FAKE_EVENT,
    },
  ];

  const router = createMemoryRouter(routes, {
    initialEntries: ["/", "/events/123"],
    initialIndex: 1,
  });

  render(<RouterProvider router={router} />);

  await waitFor(() => screen.getByText("Hello"));

  expect(location.href).toBe('http://localhost/')
  expect(location.search).toBeFalsy()
})