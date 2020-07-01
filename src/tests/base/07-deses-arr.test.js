import '@testing-library/jest-dom';
import { retornaArreglo } from '../../base-pruebas/07-deses-arr';

describe('Testing Object destructuration', () => {

    test('Should return a String and a Number', () => {
        const [string, number] = retornaArreglo();
    
        expect(number).toBe(123);
        expect( typeof number).toBe('number');

        expect(string).toBe('ABC');
        expect(typeof string).toBe('string');

    })

});