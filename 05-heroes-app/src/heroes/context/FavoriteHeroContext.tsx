import { createContext, useEffect, useState, type PropsWithChildren } from "react";
import type { Hero } from "../types/hero.inteface";


interface FavoriteHeroContext {
    //state
    favorites: Hero[];
    favoriteCount: number;

    //methods
    isFavorite: (hero: Hero) => boolean;
    toggleFavorite: (hero: Hero) => void;
}

export const FavoriteHeroContext = createContext({} as FavoriteHeroContext);

const getFavoritesFromLocalStorage = (): Hero[]  => {
    const favorites = localStorage.getItem('favorites');
    return favorites ? JSON.parse(favorites) : [];
}


export const FavoriteHeroProvider = ({children}: PropsWithChildren) => {

const [favorites, setFavorites] = useState<Hero[]>(getFavoritesFromLocalStorage());

const toggleFavorite = (hero: Hero) => {
    const heroExist = favorites.find((h) => h.id === hero.id);

    if(heroExist) {
        const newFavorites = favorites.filter((h) => h.id !== hero.id);
        setFavorites(newFavorites);
        return;
    }

    setFavorites([...favorites, hero]);
};

const isFavorite = (hero: Hero) => favorites.some((h) => h.id === hero.id); 
// o sino puedo poner asi la funcion escrita de otra manera
// const isFavorite = (hero: Hero) => { 
// return favorites.some((h) => h.id === hero.id)}

useEffect(() => {
  localStorage.setItem('favorites', JSON.stringify(favorites));
}, [favorites])


    return (
        <FavoriteHeroContext
        value={{
            //states
            favoriteCount: favorites.length,
            favorites: favorites,

            //methods
            isFavorite: isFavorite,
            toggleFavorite: toggleFavorite,
        }}
        >
            {children}
        </FavoriteHeroContext>
    )
}
