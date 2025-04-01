import React from 'react'

function Btn({text , style , type }) {
  return (
    <button type={type} className={`${style}
    cursor-pointer
      py-[10px]  px-[16px] 
      inline-block font-[500] 
      bg-[#e1ac0c] text-white border-2 border-[#e1ac0c] transition-all duration-500
      hover:bg-transparent hover:text-[#e1ac0c] `}>
        {text}
    </button>
  )
}

export default Btn