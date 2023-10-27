import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
    let x = []
    for (let i = 0; i < 15; i++) {
        x.push(i)    
    }
	return { rows: x };
};