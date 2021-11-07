import React, { useContext } from 'react'
import './style.css'

import GeneralContext from '../../context/generalContext'

const SwitchButton = ({ onClick, text }) => {

  const { generalAppColors } = useContext(GeneralContext)

  return (
    <div className="switch_button_container">
      <button style={{ backgroundColor: generalAppColors.secondaryColor, color: generalAppColors.primaryColor }} onClick={onClick}>{text}</button>
    </div>
  )
}

export default SwitchButton
