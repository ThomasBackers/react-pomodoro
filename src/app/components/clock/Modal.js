import React from 'react'

const Modal = () => {
  return (
    <div className="modal-scene">
      <div className="modal">
        <header className="modal__top-bar">
          <button className="modal__top-bar__close-btn" type="button">
            x
          </button>
        </header>

        <div className="modal__content">
          <p className="modal__content__message">would you like to take a break ?</p>
          <button
            className="modal__content__take-a-break-btn"
            type="button"
          >
            yes
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal
