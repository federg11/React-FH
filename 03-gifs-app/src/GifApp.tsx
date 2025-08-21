import { SearchPrevious } from "./gifs/components/SearchPrevious"
import { CustomHeader } from "./shared/components/CustomHeader"
import { SearchBar } from "./shared/components/SearchBar"
import { GifsList } from "./gifs/components/GifsList"
import { useGifs } from "./gifs/hooks/useGifs"


export const GifApp = () => {

    const {gifs, handleTermClick, handleSearch, previousTerms} = useGifs();

  return (
    <>
    {/*Header */}
        <CustomHeader title="Buscador de gifs" description="Descubre y comparte el gif perfecto" />


            {/*Buscador de gifs */}
            <SearchBar 
            onQuery={handleSearch}
            placeholder="Busca lo que quieras" />

        {/*Busqueda previa */}
        <SearchPrevious searches={previousTerms} onLabelClicked={handleTermClick} />

{/*GifsList */}
        <GifsList gifs={gifs}    />
    </>
  )
}
