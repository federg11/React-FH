import type { Hero } from "./hero.inteface";

export interface HeroesResponse {
    total:  number;
    pages:  number;
    heroes: Hero[];
}


