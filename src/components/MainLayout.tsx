import React from "react"
import NavigationHeader from "components/Navigation/NavigationHeader"

interface MainLayoutProps {
  children: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <div className="w-full">
        <NavigationHeader />
        <section className="w-full h-full bg-lightGray flex items-center justify-center pt-8 pb-40">
          {children}
        </section>
      </div>
    </>
  )
}

export default MainLayout
