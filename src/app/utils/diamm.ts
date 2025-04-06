import { authenticate } from './authenticate.dist.js';

export const key = '7183d41de88f249120c0942e51ec9d3705781ab2';
export const domain = 'editor.measuringpolyphony.org';
export let result = '';
export async function setup() {
    result = await authenticate(key);
}
