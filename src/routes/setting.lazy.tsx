import { createLazyFileRoute } from '@tanstack/react-router';
import { Setting } from '../components/pages';

export const Route = createLazyFileRoute('/setting')({
  component: Setting,
});
