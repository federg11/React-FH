import { CustomJumbotron } from "@/components/custom/CustomJumbotron"
import { HeroStats } from "@/heroes/components/HeroStats"
import { SearchControls } from "./ui/SearchControls"
import { CustomBreadCumbs } from "@/components/custom/CustomBreadCrumbs"

export const SearchPage = () => {
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
    </>
  )
}
