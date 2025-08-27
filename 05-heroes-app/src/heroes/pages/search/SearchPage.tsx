import { CustomJumbotron } from "@/components/custom/CustomJumbotron"
import { HeroStats } from "@/heroes/components/HeroStats"
import { SearchControls } from "./ui/SearchControls"
import { CustomBreadCumbs } from "@/components/custom/CustomBreadCrumbs"
import { HeroGrid } from "@/heroes/components/HeroGrid"
import { useQuery } from "@tanstack/react-query"
import { useSearchParams } from "react-router"
import { searchHeroesAction } from "@/heroes/actions/search-hero.action"

export const SearchPage = () => {
  const [ searchParams ] = useSearchParams();

  const name = searchParams.get('name') ?? undefined;
  const strength = searchParams.get('strength') ?? undefined;

const {data: heroes = []} = useQuery({
  queryKey: ['search', {name, strength}],
  queryFn: () => searchHeroesAction({name, strength}),
  staleTime: 1000 * 60 * 5
})

  return (

    <>
      <CustomJumbotron title='Búsqueda de heroes' description='Descubre, explora y administra super héroes y villanos' />

      <CustomBreadCumbs currentPage='Buscador de Heroes' 
        breadCumbs={
          [
            {label: 'Home1', to: '/'},
            {label: 'Home2', to: '/'},
            {label: 'Home3', to: '/'},

          ]
        }
      />
{/*Stats dashbord */}
    <HeroStats />

    {/*Filter and search */}
    <SearchControls />

    <HeroGrid heroes={heroes} />
    </>
  )
}
