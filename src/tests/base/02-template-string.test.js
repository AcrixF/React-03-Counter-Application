import '@testing-library/jest-dom';
import { getSaludo } from '../../base-pruebas/02-template-string';

describe('Test in 02-template-string.test.js', ()=> {

    test('getNombre should return fullname', () => {
        const name = 'Brenda';
        const greet = getSaludo(name);
        expect(greet).toBe('Hola ' + name );
    });

    test('getNombre should return default name', () => {
        const greet = getSaludo();
        expect(greet).toBe('Hola Marlen');
    });

});