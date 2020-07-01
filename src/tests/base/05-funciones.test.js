import '@testing-library/jest-dom';
import { getUser, getUsuarioActivo} from '../../base-pruebas/05-funciones';

describe('Pruebas en 05-funciones', () => {

    test('getUser debe retornar un objeto', () => {
        const userTest = {
            uid:'ABC123',
            username: 'El_Papi1502'
        }
        const user = getUser();

        expect(user).toEqual(userTest);
    });

    test('getUserActivo debe retornar un ojeto con el mismo username', () => {
        const usernameTest = 'Brenda Marlen';

        const userTest = {
            uid: 'ABC567',
            username: usernameTest
        };

        const user = getUsuarioActivo(usernameTest);

        expect(user).toEqual(userTest);

    });

});
