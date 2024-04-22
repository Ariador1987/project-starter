import type { PageLoad } from './$types';

export const load = (async () => {
	return {
		title: 'Knowledge share - Todo',
		description:
			'U prezentacijske svrhe - kako se nositi s stanjem u Svelte 5',
	};
}) satisfies PageLoad;
