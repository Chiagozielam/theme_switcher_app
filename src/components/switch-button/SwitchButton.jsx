import React from 'react'
import './style.css'

import { useGeneralContext } from '../../context/generalContext'

const SwitchButton = ({ onClick, text }) => {

  const { generalAppColors } = useGeneralContext()

  return (
    <div className="switch_button_container">
      <button style={{ backgroundColor: generalAppColors.secondaryColor, color: generalAppColors.primaryColor }} onClick={onClick}>{text}</button>
    </div>
  )
}

export default SwitchButton
