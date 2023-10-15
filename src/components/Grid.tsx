import React, { ReactNode } from 'react'

type Props = {
  children?: ReactNode,

}

function Grid({children}: Props) {
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 '>
      {children}
    </div>
  )
}

export default Grid