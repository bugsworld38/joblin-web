<script lang="ts">
	import * as Card from '$lib/shared/components/card';
	import RegistrationForm from './registration-form.svelte';

	interface RegistrationFormProps {
		class?: string;
	}

	const { class: className }: RegistrationFormProps = $props();
</script>

<Card.Root class={className}>
	<Card.Header>
		<Card.Title>Registration</Card.Title>
		<Card.Description>Registration epic info</Card.Description>
	</Card.Header>
	<Card.Content>
		<RegistrationForm />
	</Card.Content>
</Card.Root>
