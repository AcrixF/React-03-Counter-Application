import '@testing-library/jest-dom';
import {getImagen} from '../../base-pruebas/11-async-await';

describe('Testing async-await functoons', () => {

    test('should return URLs GIFT', async() => {
        const url = await getImagen();

        expect(typeof url).toBe('string');
        console.log(url);
        expect(url.includes('http://')).toBe(true);


    })

});