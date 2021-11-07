import React, { useContext } from 'react'
import SwitchButton from '../switch-button/SwitchButton'
import GeneralContext from '../../context/generalContext'
import './style.css'

const TopNav = () => {

  const { isDarkModeActivated, toggleDarkModeState } = useContext(GeneralContext)
  return (
    <div className="top_nav_container">
      <div className="logo"><p>SwitchUp</p></div>
      <SwitchButton
        text={isDarkModeActivated ? "Light Mode" : "Dark Mode"}
        onClick={() => toggleDarkModeState()}
      />
    </div>
  )
}

export default TopNav
