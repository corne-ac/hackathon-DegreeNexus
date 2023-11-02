import { db } from '$lib/server/prisma';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	try {
		
        const universities = await db.university.findMany({
            take: 10,
            include: {
                _count: {
                  select: { Degree: true },
                },
              },
            // offset uit figure
        });
        
		return { universities: universities };
        
	} catch (e: any) {
		return {
            universities: [],
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