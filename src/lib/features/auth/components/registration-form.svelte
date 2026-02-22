<script lang="ts">
	import * as Form from '$lib/shared/components/form';
	import { Input } from '$lib/shared/components/input';
	import { useRegister } from '../hooks';

	const { form } = useRegister();

	const { form: formData, enhance } = form;
</script>

<form class="space-y-4" use:enhance>
	<Form.Field {form} name="email">
		<Form.Control>
			{#snippet children({ props })}
				<Form.Label>Email</Form.Label>
				<Input {...props} bind:value={$formData.email} autocomplete="email" />
			{/snippet}
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>

	<Form.Field {form} name="password">
		<Form.Control>
			{#snippet children({ props })}
				<Form.Label>Password</Form.Label>
				<Input {...props} bind:value={$formData.password} type="password" autocomplete="new-password" />
			{/snippet}
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>

	<Form.Field {form} name="confirmPassword">
		<Form.Control>
			{#snippet children({ props })}
				<Form.Label>Confirm Password</Form.Label>
				<Input {...props} bind:value={$formData.confirmPassword} type="password" autocomplete="new-password" />
			{/snippet}
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>

	<div class="flex justify-between">
		<a href="/login">login</a>
		<Form.Button>Submit</Form.Button>
	</div>
</form>
