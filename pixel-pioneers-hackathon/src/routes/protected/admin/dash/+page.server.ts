import { db } from '$lib/server/prisma';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	try {
		const users = await db.user.findMany({
			select: {
				id: false,
				email: true,
				name: true,
				role: true,
				createdAt: true,
				updatedAt: true
			},
			take: 10
		});
		return { users: users };
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
