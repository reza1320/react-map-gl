import { useEffect, useRef } from 'react'
import { AiOutlineClose } from "react-icons/ai"
// CSS
import './CSS/modal.css'
// components
import Acordion from './Acordion'







export default function Modal({ availableModal, IsModal, detectedProvence }) {
  const Modal_addConnection = useRef()


  useEffect(() => {
    if (availableModal === true) {
      Modal_addConnection.current.style.display = 'block'
      const body = document.querySelector('body')
      if (Modal_addConnection.current.style.display === 'block') {
        body.style.overflow = 'hidden'
      }
    }
  }, [availableModal])

  const CloseModal = () => {
    IsModal(false)
    Modal_addConnection.current.style.display = 'none'
    const body = document.querySelector('body')
    if (Modal_addConnection?.current.style.display === 'none') {
      return body.style.overflow = 'auto'
    }
  }






  return (
    <div id='modal-add-collection' ref={Modal_addConnection}>
      <section id='body-modal'>
        <div id='header-Modal'>
          <AiOutlineClose id='close-modal' onClick={() => CloseModal()} />
        </div>

        {availableModal && <Acordion detectedProvence={detectedProvence} />}

      </section>
    </div>
  )
}