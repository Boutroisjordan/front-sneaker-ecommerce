import React, { ReactNode, FC, useState } from 'react'
import logo from "../assets/logo-shoe.png"
import logoCart from "../assets/shopping-cart.png"
import { useNavigate } from 'react-router-dom'
import SidebarCart from './SidebarCart'

function Navbar() {
  
  const navigate = useNavigate()
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = (isOpen: boolean) => {
    setIsSidebarOpen(isOpen)
  }

  
  return (
    <section className=' bg-white w-screen h-32 fixed top-0 grid grid-cols-3 text-black items-center z-10'>
      <NavContainer>
        <NavLink name="new" />
        <NavLink name="man" />
        <NavLink name="woman" />
      </NavContainer>
      <div className="flex justify-center hover:opacity-70 duration-200 cursor-pointer" onClick={() => {navigate("/")}}>
        <img src={logo} width="70px" />
      </div>
      <NavContainer flexEnd >
        <div className='relative'>

          <img onClick={closeSidebar} src={logoCart} width="70px" className='px-4 hover:opacity-70 duration-200 cursor-pointer hover:-rotate-12'/>
        {/* Status panier */}
        <div className='hidden w-2 h-2 absolute top-[0]  right-[10%] bg-red-500 rounded-full'></div>
        </div>
      </NavContainer>

<SidebarCart isOpenModal={isSidebarOpen} />
{/* ici */}
    </section>
  )
}

const NavLink = ({ name }: { name: string }) => {
  return (
    <div className='hover:bg-[#35353C] hover:text-white px-4 h-full flex items-center font-bold font-sans text-base uppercase '> {name} </div>
  )
}

type Props = {
  children?: ReactNode,
  flexEnd?: Boolean | null,

}

const NavContainer: FC<Props> = ({ flexEnd, children }) => {

  let classString: string = `h-full flex items-center px-4`

  if (flexEnd == true) {
    classString += ' justify-end';
  }
  return (
    <div className={classString}> {children} </div>
  )
}



export default Navbar