import '@testing-library/jest-dom';
import { getHeroeById, getHeroesByOwner } from '../../base-pruebas/08-imp-exp';
import heroes from '../../data/heroes';

describe('Testing import && export modules', () => {


    test('Should return a heroe by ID', () => {
        const heroID = 1;

        const heroTest = getHeroeById(heroID);

        const hero = heroes.find(h => h.id === heroID);

        expect(heroTest).toEqual(hero);

    });


    test('Should return undefined when ID does not exit', () => {
        const heroID = -1;
        const data = getHeroeById(heroID);
        expect(data).toBe(undefined);
    });


    test('Should return an array with heroes who belong to DC', () => {

        const owner = 'DC';

        const dcHeroes = getHeroesByOwner(owner);
        const dcHeroesData = heroes.filter(h => h.owner === owner);

        expect(dcHeroesData).toEqual(dcHeroes);
        expect(dcHeroes.length).toBe(dcHeroesData.length);
    });

    test('Should return an array with heroes who belong to Marvel', () => {
        const owner = 'DC';

        const marvelHeroes = getHeroesByOwner(owner);
        const marvelHeroesData = heroes.filter(h => h.owner === owner);

        expect(marvelHeroesData).toEqual(marvelHeroes);
        expect(marvelHeroes.length).toBe(marvelHeroesData.length);
    })

});