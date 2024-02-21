import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/result')({
  component: Result,
});

function Result() {
  return (
    <div className="p-2">
      <h3>Welcome Result!</h3>
    </div>
  );
}
