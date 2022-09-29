import React from 'react'
import { useEffect, useState } from 'react'
export const ImgContext = React.createContext()
const axios = require('axios')
const ImgProvider = (props) => {
  const jsonData = async () => {
    const response = await axios.get('/imgGallery.json')
    setImgs(response.data.photos)
  }
  useEffect(() => {
    jsonData()
  }, [])

  const [imgs, setImgs] = useState([])

  return (
    <ImgContext.Provider value={{ imgs, setImgs }}>
      {props.children}
    </ImgContext.Provider>
  )
}

export default ImgProvider
