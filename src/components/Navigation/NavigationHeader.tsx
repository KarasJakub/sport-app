import React from "react"
import Logo from "assets/icons/Logo.png"

const NavigationHeader = () => {
  return (
    <>
      <div className="w-full flex items-center justify-center py-8 h-24 fixed top-0 bg-white">
        <img src={Logo} alt="Company Logo" />
      </div>
    </>
  )
}

export default NavigationHeader
