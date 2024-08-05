/**
 * @jest-environment jsdom
 */

import {
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";
import {render, screen, act, waitFor,} from '@testing-library/react'
import { userEvent } from "@testing-library/user-event";
import '@testing-library/jest-dom'
import Hello from '../hello'
import Home from "../home";

test('hello world', async () => {
  const FAKE_EVENT = { name: "test event" };
  const routes: RouteObject[] = [
    {
      path: "/events/:id",
      element: <Hello />,
      loader: () => FAKE_EVENT,
    },
    {
      path: "/home",
      element: <Home />,
    }
  ];

  const router = createMemoryRouter(routes, {
    initialEntries: ["/", "/events/123"],
    initialIndex: 1,
  });
  const user = userEvent.setup()

  render(<RouterProvider router={router} />);

  // ACT
  await screen.findByText('Hello');
  const toHome = await screen.findByText('Click me');
  await user.click(toHome);

  await screen.findByText('home')

  // locationは取れない
  expect(location.href).toBe("http://localhost/");
  expect(location.search).toBeFalsy();

  expect((router.state.location.pathname)).toBe('/home')
  expect((router.state.location.search)).toBe('?page=hoge')
})