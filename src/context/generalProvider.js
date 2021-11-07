import React, { useState, useEffect } from 'react'
import GeneralContext from './generalContext'

const GeneralProvider = ({ children }) => {

  const [isDarkModeActivated, setIsDarkModeActivated] = useState(false)
  const [generalAppColors, setGeneralAppColors] = useState({
    primaryColor: "#fff",
    secondaryColor: "#2B003F",
    textColor: "#000",
    fadedTextCOlor: "#4E4E4E"
  })

  useEffect(() => {
    if(isDarkModeActivated){
      setGeneralAppColors({
        ...generalAppColors,
        primaryColor: "#2B003F",
        secondaryColor: "#fff",
        textColor: "#fff",
        fadedTextColor: "#E5E5E5"
      })

      return
    }

    setGeneralAppColors({
      primaryColor: "#fff",
      secondaryColor: "#2B003F",
      textColor: "#000",
      fadedTextColor: "#4E4E4E"
    })
  }, [isDarkModeActivated])

  const toggleDarkModeState = () => {
    setIsDarkModeActivated(!isDarkModeActivated)
    console.log("Hello world")
  }

  return (
    <GeneralContext.Provider
      value={{
        isDarkModeActivated,
        generalAppColors,
        toggleDarkModeState,
      }}
    >
      {children}
    </GeneralContext.Provider>
  )
}

export default GeneralProvider
