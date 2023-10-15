// Sidebar.tsx
import React, { useContext, useEffect, useState } from 'react';
import { Cart, MainContexte } from '../Contexte/MainContexte';
import CartSneaker from './CartSneaker';


interface SidebarProps {
  // Ajoute les éventuelles propriétés nécessaires
  isOpenModal: boolean
  onToggle: (isOpen: boolean)=>any;
}

const SidebarCart = ({isOpenModal, onToggle}: SidebarProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [price, setPrice] = useState<number>(0)

  const {cart} = useContext(MainContexte)

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    onToggle(!isOpen)
  };

  useEffect(() => {
    setIsOpen(isOpenModal)
  },[isOpenModal])

  const handleProcessPrice = () => {

    let resultPrice: number = 0;
    cart.forEach((element : Cart) => {
      let result: number = element.sneaker.retail_price_cents * element.quantity;
      resultPrice += result;
      console.log("[cart element]: ", element)
    });
    setPrice(resultPrice)
    console.log("[Result]: ", resultPrice)
 
  }

  useEffect(() => {
    handleProcessPrice()
  }),[cart]

  return (
    <div className={` fixed top-0 right-0 h-full bg-white shadow-xl text-black ${isOpen ? '  translate-x-0' : 'translate-x-96'} transition-transform ease-in-out duration-300  w-96`}>
      <button onClick={toggleSidebar} className=" bg-transparent px-3 py-2 text-black">
        X
      </button>
      <div className='h-full px-4'>

      
        <h3 className='mb-4'>Panier ({cart.length})</h3>
      <div className=" pb-48 text-black flex flex-col gap-2 overflow-y-scroll h-full scroll-smooth " style={{"overflowAnchor": "none"}}>
        {/* Met ici le contenu de ta sidebar, par exemple, la liste des produits du panier */}

        {cart.map((item: Cart) => {
  
          return (
            <CartSneaker product={item} />
          )
        })}
      </div>
      </div>
      {/* BAndeau prix et payment */} 
      <div className='fixed bottom-0 left-0 right-0 h-20 shadow-sidebar-payment bg-white flex justify-start items-center px-2 text-black font-neue font-bold text-lg '>
        <h3 className='' >
        TOTAL:  ${price / 100}
        </h3>
      </div>
    </div>
  );
};

export default SidebarCart;

