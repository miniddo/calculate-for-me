import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

export const Route = createRootRoute({
  component: () => (
    <div className="bg-default h-screen w-screen">
      <Outlet />
      <TanStackRouterDevtools />
    </div>
  ),
});
