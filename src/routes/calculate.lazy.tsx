import { createLazyFileRoute } from '@tanstack/react-router';
import { Calculate } from '../components/pages';

/**
 * lump-sum : 1명에게 몰아주기
 * split-equally : 1/N 정산하기
 * proportional : 비율 다르게 정산하기
 */
// export type CalculateType = 'lump-sum' | 'split-equally' | 'proportional';

interface SearchParameters {
  type?: CalculateType;
  count?: number;
  price?: number;
}

export const Route = createLazyFileRoute('/calculate')({
  component: Component,
});

function Component() {
  const { type, count, price }: SearchParameters = Route.useSearch();
  return <Calculate type={type} count={count} price={price} />;
}
