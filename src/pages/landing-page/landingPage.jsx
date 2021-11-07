import React, { useContext } from 'react'
import SwitchButton from '../../components/switch-button/SwitchButton'
import GeneralContext from '../../context/generalContext'
import './style.css'

const LandingPage = () => {

  const { isDarkModeActivated, toggleDarkModeState, generalAppColors } = useContext(GeneralContext)
  return (
    <div className="landing_page_container" style={{ backgroundColor: generalAppColors.primaryColor }}>
      <div className="inner_landing_page_container">
        <h1 style={{ color: generalAppColors.fadedTextColor}}>Welcome</h1>
        <p style={{ color: generalAppColors.textColor}}>You are curretly on light mode</p>
        <SwitchButton
          text={isDarkModeActivated ? "Light Mode" : "Dark Mode"}
          onClick={() => toggleDarkModeState()}
        />
      </div>
    </div>
  )
}

export default LandingPage
