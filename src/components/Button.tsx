import React from 'react'

type Props = {
  labelBtn: string,
  classname: string
}

function ButtonAdd({labelBtn, classname}: Props) {
  return (
    <button className={classname}>{labelBtn}</button>
  )
}

export default ButtonAdd