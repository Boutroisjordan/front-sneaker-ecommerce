import React, { useEffect, useState } from 'react';
import { CardModal } from './Card';
import Cross from '../assets/cross.png'

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

function Modal({ isOpen, onClose, children }: ModalProps) {

  const [modalStyle, setModalStyle] = useState<React.CSSProperties>({
    display: 'none',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%', // Ajoutez ou ajustez la largeur selon vos besoins
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    zIndex: 1000,
  });



useEffect(() => {

  setModalStyle(prevStyle => ({
    ...prevStyle,
    display: isOpen ? 'block' : 'none',
  }));
},[isOpen, onClose, children])

  return (
    <div style={modalStyle} className='bg-white relative'>
      <div onClick={onClose} className='absolute  top-2 right-2 cursor-pointer'>
      <img src={Cross} width="20px"  />
      </div>
      {/* <div>
        <button onClick={onClose}>Fermer la modal</button>
        {children}
      </div> */}
      {children}
    </div>
  );
};

export default Modal;
