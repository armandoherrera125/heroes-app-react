import {heroes} from '../data/HeroesList';
export const getHeroesByPublisher = (publisher) => {
    return heroes.filter( hero=> hero.publisher === publisher );
}
