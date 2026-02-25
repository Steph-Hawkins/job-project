import React from 'react'

const BTN = ({childern, bg = "bg-blue-200 text-white"}) => {
  return (
    <div className={`${bg} rounded py-2 px-4 md:w-fit w-full `}>
        {childern}
    </div>
  )
}

export default BTN