import { db } from '$lib/server/prisma.server';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	try {
		const degrees = await db.degree.findMany({
			select: {
				...db.degree,
				favoritedBy: false
			},
			take: 10
		});
		return { degrees: degrees };
	} catch (e: any) {
		return {
			error: {
				name: e.name,
				message: e.message,
				stack: e.stack
			}
		};
	} finally {
		await db.$disconnect();
	}
};

// Event Handlers
function onPageChange(e: CustomEvent): void {
	console.log('Paginator - event:page', e.detail);
}

function onAmountChange(e: CustomEvent): void {
	console.log('Paginator - event:amount', e.detail);
}
