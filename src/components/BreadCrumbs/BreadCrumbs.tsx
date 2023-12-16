import React, { useEffect, useState } from "react"
import { useLocation, Link } from "react-router-dom"

interface PathMapping {
  [key: string]: string
}

const BreadCrumbs = () => {
  const location = useLocation()
  const [crumbs, setCrumbs] = useState<JSX.Element[]>([])

  useEffect(() => {
    const pathMapping: PathMapping = {
      "/": "Piłka nożna",
      "/stats-table": "Tabela",
    }

    const paths = Object.keys(pathMapping)
    const currentPath = location.pathname

    const breadcrumbElements: JSX.Element[] = paths.map((path, index) => {
      const isLast = index === paths.length - 1
      const label = pathMapping[path] ?? path

      return (
        <span key={path} className="flex items-center">
          {index > 0 && <span className="mx-4 text-gray-500">&gt;</span>}
          <Link
            to={path}
            className={`font-medium font-primary text-base ${
              isLast ? "text-[#1C336C80]" : ""
            }`}
            aria-current={currentPath === path ? "page" : undefined}
          >
            {label}
          </Link>
        </span>
      )
    })

    setCrumbs(breadcrumbElements)
  }, [location.pathname])

  return <div className="w-full flex bg-[#EEEFF2] py-3 pl-12">{crumbs}</div>
}

export default BreadCrumbs
