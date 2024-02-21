import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/setting')({
  component: Setting,
});

function Setting() {
  return (
    <div className="p-2">
      <h3>Welcome Setting!</h3>
    </div>
  );
}
