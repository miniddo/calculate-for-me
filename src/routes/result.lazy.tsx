import { createLazyFileRoute } from '@tanstack/react-router';
import { Result } from '../components/pages';

export const Route = createLazyFileRoute('/result')({
  component: Result,
});
