import '@testing-library/jest-dom';
import { getHeroeByIdAsync } from '../../base-pruebas/09-promesas';
import heroes from '../../data/heroes';


describe('Testing Asyc calls', () => {

    test('getHeroByIdAsync shoud return a heroe async', (done) => {
        const id = 1;
        getHeroeByIdAsync(id)
            .then( hero => {
                const h = heroes[0];
                expect(h).toBe(hero);
                done();
            } );
    });

    test('getHeroByIdAsync should return a error if the hero id does not exist', (done) => {
        const id = -1;
        getHeroeByIdAsync(id)
            .catch(error => {
                expect(error).toBe('No se pudo encontrar el héroe');
                done();
            });
    })
    

})