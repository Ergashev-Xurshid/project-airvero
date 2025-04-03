import React from 'react'
import { servicesCard } from '../utils/consttanta'
import { useTranslation } from 'react-i18next'

function Services() {
  const { t } = useTranslation()
  return (
    <div id='types' className='mt-[80px] py-[80px]  px-[15px] lg:px-[100px] xl:px-[200px] '>
      <div className='text-center mb-[60px]'>
        <span className='text-[17px] text-[#e1ac0c]'>{t("services-sub-title")}</span>
        <h2 className='mt-[14px] text-[23px] font-[600] text-[#232323] tracking-[0.5px]'>{t("services-title")}</h2>
      </div>
      <div className='flex flex-wrap lg:flex-nowrap justify-center lg:justify-between items-start gap-[30px]'>
        {servicesCard.map((item) => (
          <div key={item.id} className=' min-h-[380px] lg:min-h-[440px] flex flex-col w-full md:w-[45%] lg:w-[33%] bg-white border border-[#ddd] rounded-[10px] px-[30px] py-[50px]'>
            <div className='w-full flex justify-center'>
              <img src={item.image} alt={item.title} className='max-w-full' />
            </div>
            <div className='text-center flex-1'>
              <h4 className='font-[600] text-[19px] text-[#232323] mt-[30px] mb-[5px]'>{t(item.title)}</h4>
              <p className='leading-[24px] text-[13px] text-[#7a7a7a]'>{t(item.description)}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Services