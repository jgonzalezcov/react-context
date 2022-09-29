import React from 'react'
import { ImgContext } from '../context/ImgProvider'

const Favorites = () => {
  const { imgs } = React.useContext(ImgContext)
  return (
    <div>
      <div className="container-title">
        <h3>Fotos Favoritas</h3>
      </div>
      <div className="card_container">
        {imgs
          .filter((y) => y.filled === true)
          .map((e) => (
            <div className="container-list" key={e.id}>
              <div
                className="img-card"
                style={{
                  backgroundImage: `url(${e.src.tiny})`,
                }}
              ></div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Favorites
