import React, { ReactNode } from 'react'


type Props = {
  children?: ReactNode,

}

function Centered({children}: Props) {
  return (
    <div className=' px-4 m-auto mt-32' >
      {children}
    </div>
  )
}

export default Centered