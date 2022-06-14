import { heroes } from "../data/HeroesList"

export const getHeroesBySearch = (superhero='') => {
    superhero = superhero.toLowerCase();
    if (superhero.length === 0) {
        return [];
    } else {
        
        return heroes.filter(hero => hero.superhero.toLowerCase().includes(superhero));
    }
}
