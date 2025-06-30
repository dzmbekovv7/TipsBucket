import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState, type PropsWithChildren } from 'react'

export function Provider({ children }: PropsWithChildren) {
	const [queryClient] = useState(new QueryClient())

	return (
		<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
	)
}
