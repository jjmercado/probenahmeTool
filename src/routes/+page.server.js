import { getProjectNr, getGeneralData } from '$lib/database';

/** @type {import('./$types').PageServerLoad} */
export async function load() 
{
    return {
        // dbData: getGeneralData(),
    };
};

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({request}) => {
        const data = await request.formData();

        getProjectNr(data.get("projectNr"));
    }
};