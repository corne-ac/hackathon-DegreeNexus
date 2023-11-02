// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types


declare namespace App {
	type User = import('@prisma/client/edge').User;
	interface Locals {
		user: User | null;
/*		user: {
			name: string;
			id: string;
			photo: string;
		} | null;*/

	}
	declare module '@fortawesome/solid-svg-icons/index.es' {
		export * from '@fortawesome/solid-svg-icons';
	}
	// interface PageData {}
	// interface Error {}
	// interface Platform {}
}
