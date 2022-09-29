import React from 'react'
import { ImgContext } from '../context/ImgProvider'
import Heart from '../components/Heart.jsx'
const Home = () => {
  const viewFunctions = (idIndex) => {
    setImgs((current) =>
      current.map((obj) => {
        if (obj.id === idIndex) {
          return { ...obj, filled: true }
        }

        return obj
      })
    )
  }
  const { imgs, setImgs } = React.useContext(ImgContext)
  return (
    <div>
      {console.log(imgs)}
      <div className="container-title">
        <h3>Natural Pic</h3>
      </div>
      <div className="card_container">
        {imgs.map((e) => (
          <div className="container-list" key={e.id}>
            <div
              style={{
                backgroundImage: `url(${e.src.tiny})`,
              }}
            >
              <div>
                <div className="img-card">
                  <div className="container-heart">
                    <div onClick={() => viewFunctions(e.id)}>
                      <Heart filled={e.filled} />
                    </div>
                  </div>
                  <p className="tex-img">{e.alt}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
