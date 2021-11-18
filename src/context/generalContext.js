import React, { createContext, useContext } from 'react'

const GeneralContext = createContext({})

export const useGeneralContext = () => {
  const allGeneralContexValues = useContext(GeneralContext)

  return {
    ...allGeneralContexValues
  }
}

export default GeneralContext
