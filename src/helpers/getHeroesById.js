import {heroes} from '../data/HeroesList';
export const getHeroesById = (id) => {
    return heroes.find( hero=> hero.id === id);
}
