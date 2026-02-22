<script lang="ts">
	import * as Card from '$lib/shared/components/card';
	import LoginForm from './login-form.svelte';

	interface LoginFormProps {
		class?: string;
	}

	const { class: className }: LoginFormProps = $props();
</script>

<Card.Root class={className}>
	<Card.Header>
		<Card.Title>Login</Card.Title>
		<Card.Description>Login epic info</Card.Description>
	</Card.Header>
	<Card.Content>
		<LoginForm />
	</Card.Content>
</Card.Root>
