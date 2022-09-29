import React from 'react'
import { useEffect, useState } from 'react'
export const ImgContext = React.createContext()

const ImgProvider = (props) => {
  const jsonData = async () => {
    const url = '/imgGallery.json'
    const response = await fetch(url)
    const data = await response.json()
    setImgs(data.data.results)
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
