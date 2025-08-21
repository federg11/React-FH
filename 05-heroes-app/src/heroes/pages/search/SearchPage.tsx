import { CustomJumbotron } from "@/components/custom/CustomJumbotron"
import { HeroStats } from "@/heroes/components/HeroStats"

export const SearchPage = () => {
  return (

    <>
      <CustomJumbotron title='Búsqueda de heroes' description='Descubre, explora y administra super héroes y villanos' />

    <HeroStats />
    </>
  )
}
