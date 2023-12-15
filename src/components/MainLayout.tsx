import React from "react"
import NavigationHeader from "components/Navigation/NavigationHeader"
import BreadCrumbs from "./BreadCrumbs/BreadCrumbs"
import { useLocation } from "react-router-dom"

interface MainLayoutProps {
  children: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const location = useLocation()
  return (
    <>
      <div className="w-full">
        <NavigationHeader />
        {location.pathname === "/" ? (
          ""
        ) : (
          <div className="w-full ">
            <BreadCrumbs />
          </div>
        )}

        <section className="w-full h-full bg-lightGray flex items-center justify-center pt-8 pb-40">
          {children}
        </section>
      </div>
    </>
  )
}

export default MainLayout
