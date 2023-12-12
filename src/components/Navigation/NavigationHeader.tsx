import React from "react"
import Logo from "assets/icons/Logo.png"

const NavigationHeader = () => {
  return (
    <>
      <div className="flex items-center justify-center py-8">
        <img src={Logo} alt="Company Logo" />
      </div>
    </>
  )
}

export default NavigationHeader
