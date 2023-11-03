import { db } from '$lib/server/prisma';
import type { PageServerLoad } from './$types';
import type { Actions } from '@svelte/kit';

export const load: PageServerLoad = async () => {
	try {
		const degrees = await db.degree.findMany({
			take: 10,
			include: {
				tags: {
					take: 3
				},
				University: { select: { name: true } }
			}
		});

		// get tags
		let tags = await db.tag.findMany({});

		return { degrees: degrees, tags: tags };
	} catch (e: any) {
		return {
			degrees: [],
			error: {
				name: e.name,
				message: e.message,
				stack: e.stack
			}
		};
	}
};

export const actions: Actions = {
	degrees: async ({ request }) => {
		const a = await request.formData();
		// const formObj = Object.fromEntries();
		console.log(a.get('selectedChips'));
		console.log(a.get('search'))

		// let a = {
		// 	tags: {
		// 		some: {
		// 			name: {
		// 				equals: a.get('selectedChips')
		// 			}
		// 		}
		// 	},
		// 	title: {
		// 		search: a.get('search')
		// 	}				
		// }

		let filter = {}

		if (a.get('selectedChips')) {
			filter.tags = {
				some: {
					name: {
						equals: a.get('selectedChips')
					}
				}
			}
		}

		if (a.get('search')) {
			filter.title = {
				contains: a.get('search'),
				mode: 'insensitive'
			}
		}
		

		try {
			const degrees = await db.degree.findMany({
				take: 10,
				include: {
					tags: {
						take: 3
					},
					University: { select: { name: true } }
				},
				where: filter
			});

			// get tags
			let tags = await db.tag.findMany({});
			return { degrees: degrees, tags: tags, searchTerm: a.get('search'), chips: a.get('selectedChips') };
		} catch (e: any) {
			console.log(e);
			return {
				degrees: null,
				error: {
					name: e.name,
					message: e.message,
					stack: e.stack
				}
			};
		}
	}
};
