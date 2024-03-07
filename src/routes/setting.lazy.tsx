import { createLazyFileRoute } from '@tanstack/react-router';
import { Setting } from '../components/pages';

interface SearchParameters {
  count?: number;
  price?: number;
}

export const Route = createLazyFileRoute('/setting')({
  component: Component,
});

function Component() {
  const { count, price }: SearchParameters = Route.useSearch();
  return <Setting count={count} price={price} />;
}
