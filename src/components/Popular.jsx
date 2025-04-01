import React from 'react'
import Carusel from './Carusel'
import { useTranslation } from 'react-i18next'

function Popular() {
  const{t}=useTranslation()
  return (
    <div id='popular' className='w-full px-[25px] py-[80px]  flex flex-col items-center'>
      <div className='text-center'>
        <span className='block text-[17px]  text-[#e1ac0c]'>{t("popular-sub-title")}</span>
        <h2 className='mt-[14px] text-[23px] text-[#232323] tracking-[0.5px] font-semibold'>
        {t("popular-title")}
        </h2>
      </div>
      <div className='w-full'>
        <Carusel/>
      </div>
    </div>
  )
}

export default Popular