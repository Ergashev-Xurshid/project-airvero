import React from 'react'

function SubmitModal({setCloseModal}) {
  return (
    <div  className="fixed inset-0 bg-gray-300  z-[9999] bg-opacity-50 flex justify-center items-center">
      <div data-aos="fade-up" className="bg-white p-6 rounded-lg shadow-lg w-96 text-center">
        <h2 className="text-xl font-bold text-gray-800">Muvaffaqiyatli yuborildi!</h2>
        <p className="text-gray-600 mt-2">Sizning ma’lumotlaringiz qabul qilindi.</p>
        <button
          onClick={()=>setCloseModal(false)}
          className="cursor-pointer mt-4 px-4 py-2 bg-yellow-500 text-white font-bold rounded-lg"
        >
          Yopish
        </button>
      </div>
    </div> 
  )
}

export default SubmitModal