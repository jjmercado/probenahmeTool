import { getProjectNr } from '$lib/database';

/** @type {import('./$types').PageServerLoad} */
export async function load() 
{

};

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({request}) => {
        const form = await request.formData();
        const res = await getProjectNr(form.get("projectNr"));
        console.log("res from database" + JSON.stringify(res?.protocolData));
        return {
            protocolData: res?.protocolData,
        };
    }
};