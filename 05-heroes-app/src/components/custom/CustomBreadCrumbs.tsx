import { SlashIcon } from "lucide-react"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "../ui/breadcrumb"
import { Link } from "react-router";



interface Props {
  currentPage: string;
  breadCumbs?: Breadcrumb[]
}

interface Breadcrumb {
  label: string;
  to: string;
}

export const CustomBreadCumbs = ({ currentPage, breadCumbs = [] }: Props) => {
  return (
    <Breadcrumb className="my-5">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link to='/'>Inicio
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        {
          breadCumbs.map((crumb) => (
            <div className="flex items-center">
              <BreadcrumbItem>
                <BreadcrumbSeparator>
                  <SlashIcon />
                </BreadcrumbSeparator>
                <BreadcrumbLink asChild>
                  <Link to={crumb.to}>{crumb.label}</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </div>
          ))}
          
        <BreadcrumbSeparator>
          <SlashIcon />
        </BreadcrumbSeparator>

        <BreadcrumbItem>
          <BreadcrumbLink className="text-black">{currentPage}</BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}
