import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'

const Modal = ({ breakTime, setBreakTime, setTime, setTimeGoesBy, playPauseBtn }) => {
  const modalScene = useRef()

  useEffect(() => {
    if (breakTime) modalScene.current.style.animation = 'modal-in .4s ease-out forwards'
  }, [breakTime])

  const clickOnClose = () => {
    modalScene.current.style.animation = 'modal-out .4s ease-in forwards'
    setBreakTime(false)
  }

  const clickOnRestart = () => {
    modalScene.current.style.animation = 'modal-out .4s ease-in forwards'
    setBreakTime(false)
    setTime(1500)
    setTimeGoesBy(true)
    playPauseBtn.current.children[0].classList = ['hidden']
    playPauseBtn.current.children[1].classList = []
  }

  return (
    <div className="modal-scene" ref={modalScene}>
      <div className="modal">
        <header className="modal__top-bar">
          <button
            className="modal__top-bar__close-btn"
            type="button"
            onClick={clickOnClose}
          >
            x
          </button>
        </header>

        <div className="modal__content">
          <p className="modal__content__message">Break time!</p>
          <button
            className="modal__content__restart-btn"
            type="button"
            onClick={clickOnRestart}
          >
            restart
          </button>
        </div>
      </div>
    </div>
  )
}
// nice stuff to re-use
Modal.propTypes = {
  breakTime: PropTypes.bool.isRequired,
  setBreakTime: PropTypes.func.isRequired,
  setTime: PropTypes.func.isRequired,
  setTimeGoesBy: PropTypes.func.isRequired,
  playPauseBtn: PropTypes.object.isRequired
}

export default Modal
