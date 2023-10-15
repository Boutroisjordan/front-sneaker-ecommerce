import React, { useContext } from 'react'
import { Sneaker } from '../Types/Sneaker'
import { ICart, MainContexte } from '../Contexte/MainContexte'

type CartSneakerProps = {
  product: ICart
}

function CartSneaker({product}: CartSneakerProps) {

  const {removeFromCart, addToCart} = useContext(MainContexte)
  const sneaker: Sneaker = product.sneaker
  
  return (
    <div className='grid grid-cols-3 w-full items-start h-auto'>

      <div className='bg-[#f6f6f6] relative overflow-hidden group selection:bg-none'>
                <img src={product.sneaker.main_picture_url} />
                <div className='flex flex-row absolute bottom-0 left-0 right-0 translate-y-6 group-hover:translate-y-0 duration-200'>

                <div onClick={() =>addToCart({sneaker})}  className='bg-green-500 text-white flex-grow  flex justify-center items-center cursor-pointer outline-none selection:bg-none'>+</div>
                <div onClick={() =>removeFromCart(product.sneaker.id)}  className='bg-red-500  text-white flex-grow flex justify-center items-center cursor-pointer outline-none selection:bg-none'>-</div>
                </div>
              </div> 
      <div className=' col-span-2 px-2'>
        <p className='font-bold'>{product.sneaker.name}</p>
        <p className=' text-end font-light italic'>
         ${product.sneaker.retail_price_cents / 100 } x{product.quantity}
        </p>
        <p className=''>
          {
            product.quantity != undefined ? `$ ${(product.quantity * product.sneaker.retail_price_cents) / 100}` : "0"
          }

      
        </p>
        {console.log("product: ", product)}

      </div>
    </div>
  )
}

export default CartSneaker