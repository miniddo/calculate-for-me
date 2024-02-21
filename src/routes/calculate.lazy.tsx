import { createLazyFileRoute } from '@tanstack/react-router';

/**
 * lump-sum : 1명에게 몰아주기
 * split-equally : 1/N 정산하기
 * proportional : 비율 다르게 정산하기
 */
interface SearchParameters {
  type?: 'lump-sum' | 'split-equally' | 'proportional';
}

export const Route = createLazyFileRoute('/calculate')({
  component: Calculate,
});

function Calculate() {
  const { type }: SearchParameters = Route.useSearch();
  console.log('type', type);

  return (
    <div className="p-2">
      <h3>Welcome Calculate!</h3>
    </div>
  );
}
