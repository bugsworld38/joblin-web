<script lang="ts">
	import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query';
	import { ModeWatcher } from 'mode-watcher';

	import './layout.css';
	import favicon from '../assets/favicon.svg';
	import { Toaster } from '$lib/shared/components/sonner';
	import { setAuthContext } from '$lib/features/auth';

	const queryClient = new QueryClient();

	setAuthContext();

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<QueryClientProvider client={queryClient}>
	<ModeWatcher />
	<Toaster />
	{@render children()}
</QueryClientProvider>
