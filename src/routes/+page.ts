import type { PageLoad } from './$types';

export const load = (async () => {
	const data = {
		title: 'Knowledge share',
		description: 'U prezentacijske svrhe...',
	};

	return {
		...data,
	};
}) satisfies PageLoad;
