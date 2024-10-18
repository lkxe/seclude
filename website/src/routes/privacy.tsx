import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/privacy')({
  component: () => <div>Hello /privacy!</div>,
})
