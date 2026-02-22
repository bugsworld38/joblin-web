import { createMutation } from '@tanstack/svelte-query';

import { useAuthContext } from './store.svelte';
import { login, register } from './api';

export function createLoginMutation() {
	const auth = useAuthContext();

	return createMutation(() => ({
		mutationFn: login,
		onSuccess: (data) => auth.setAccessToken(data.accessToken)
	}));
}

export function createRegisterMutation() {
	const auth = useAuthContext();

	return createMutation(() => ({
		mutationFn: register,
		onSuccess: (data) => auth.setAccessToken(data.accessToken)
	}));
}
