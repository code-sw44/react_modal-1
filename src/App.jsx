import { useState } from 'react'
import './App.css'

function App() {
  const [openModal, setOpenModal] = useState(false)

  return (
    <>
      <div className="container">
        <button
          onClick={() => setOpenModal(!openModal)}
        >OpenModal</button>

      </div>
      {
        openModal && (
          <div className="open__modal">
            <div
              onClick={() => setOpenModal(!openModal)}
              className="close__modal">XX</div>
          </div>
        )
      }
    </>
  )
}

export default App
