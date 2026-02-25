import React from 'react'
import { children} from 'react'

const Button = ({children, bg = "bg-blue-500", hover =" hover:bg-blue-200", hoverText = "hover:text-black", width="w-fit", text ="text-black"}) => {
  return (
    <button className={`${bg} ${hover} ${hoverText} ${width} ${text} rounded-2xl text-black py-2 px-4 flex items-center justify-center transition-all ease-in-out delay-500`}>
        {children}
    </button>
  )
}
 
export default Button