import {createFileRoute} from '@tanstack/react-router'

export const Route = createFileRoute('/docs')({
    component: () => <div>Hello /docs!</div>,
})
