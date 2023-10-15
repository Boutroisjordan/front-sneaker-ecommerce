import React, { useContext, useEffect, useState } from 'react'
import Centered from '../components/Centered'
import Grid from '../components/Grid'
import Card, { CardModal } from '../components/Card'
import { MainContexte } from '../Contexte/MainContexte'

import { Sneaker } from '../Types/Sneaker'
import Modal from '../components/Modal'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

function Home() {
const {jsonData} = useContext(MainContexte)
const [sneakerSelect, setSneakerSelect] = useState<Sneaker | undefined>()
const [isOpen, setIsModalOpen] = useState(false);

useEffect(() => {
  // console.log("HELOOO: ", jsonData)
},[])

// let subtitle;

const openModal = (event: React.MouseEvent<HTMLButtonElement>, sneaker: Sneaker) => {
    console.log("tinc: ")
    // event.preventDefault()
    setIsModalOpen(true);
    setSneakerSelect(sneaker)
    console.log("trigger: ", sneaker)
    console.log("Select: ", sneakerSelect)
  }

  const closeModal = () => {
    setIsModalOpen(false);
  };


  return (
    <>
    <Centered>
      <Grid>
        <Card data={jsonData} onPreview={openModal} />
      </Grid>
    </Centered>
    <Modal isOpen={isOpen} onClose={closeModal}>
        {/* <h2>Contenu de la modal</h2>
        <p>Ce texte est à l'intérieur de la modal.</p> */}
           {sneakerSelect ? <CardModal sneaker={sneakerSelect} /> : ""}   
      </Modal>
    {/* <button onClick={openModal}>Open Modal</button> */}
      {/* <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Preview"
      >
        {/* {sneakerSelect ? <h2 className='text-black'>{sneakerSelect.name}</h2> : "" } */}
        {/* <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button> */}
        {/* </form>
      </Modal>  */}

    </>
  )
}

export default Home