import React from 'react'
import { goalItems } from '../utils/consttanta'
import { useTranslation } from 'react-i18next'

function Thegoal() {
  const {t}=useTranslation()
  return (
    <div className='px-[15px] lg:px-[100px] xl:px-[200px] '>
      <h2 className='font-medium mt-[20px] mb-[10px] text-[30px]'>{t("goal-title")}</h2>
      <div className='mt-[15px] flex flex-row flex-wrap justify-between'>
        {goalItems.map((item)=> (
          <div key={item.id} className='flex max-md:flex-col flex-row pt-[30px] max-lg-w-full'>
            <div className='w-full md:w-[300px] h-[380px] md:h-[200px] rounded-3xl overflow-hidden mb-[20px]'>
              <img className='w-full h-full' src={item.image} alt={item.title} />
            </div>
            <div className='w-full md:w-[600px] md:pl-[30px] h-auto md:h-[200px] '>
              <h2 className='text-[30px] font-medium text-[#232323] ' >{t(item.title)}</h2>
              <h5 className='text-[14px] font-medium text-[#232323] my-[10px]'>{t(item.category)}</h5>
              <p className='text-[13px]  text-[#7a7a7a] leading-[24px] mb-[10px]'>{t(item.description)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Thegoal