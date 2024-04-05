import { Provider } from 'mobx-react';
import CalculateStore from '../store/calculateStore';
import { createRootRoute, Outlet } from '@tanstack/react-router';
// import { TanStackRouterDevtools } from '@tanstack/router-devtools';

const calculateStore = new CalculateStore();

export const Route = createRootRoute({
  component: () => (
    <Provider calculateStore={calculateStore}>
      <div className="h-screen w-screen bg-default">
        <Outlet />
        {/* <TanStackRouterDevtools /> */}
      </div>
    </Provider>
  ),
});
