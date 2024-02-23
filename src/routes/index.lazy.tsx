import { createLazyFileRoute } from '@tanstack/react-router';
import { Home } from '../components/pages';

export const Route = createLazyFileRoute('/')({
  component: Home,
});
