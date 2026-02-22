import { getContext, setContext } from 'svelte';

const ACCESS_TOKEN_KEY = 'accessToken';

export class AuthContext {
	accessToken = $state(localStorage.getItem(ACCESS_TOKEN_KEY));
	isAuthenticated = $derived(!!this.accessToken);

	setAccessToken(accessToken: string) {
		this.accessToken = accessToken;
		localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
	}

	clearAccessToken() {
		this.accessToken = null;
		localStorage.removeItem(ACCESS_TOKEN_KEY);
	}
}

const AUTH_KEY = Symbol('auth');

export function setAuthContext() {
	return setContext<AuthContext>(AUTH_KEY, new AuthContext());
}

export function useAuthContext() {
	return getContext<AuthContext>(AUTH_KEY);
}
