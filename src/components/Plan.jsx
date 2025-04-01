import React, { useState } from 'react'
import Btn from './Btn'
import { planLi } from '../utils/consttanta'
import { useTranslation } from 'react-i18next'

function Plan({setIsOpen}) {
  const {t}=useTranslation()
  const [id, setId] = useState(0)
  return (
    <div className='pb-[80px] px-[15px] lg:px-[100px] xl:px-[200px] '>
      <div className='border-t-1 border-[#ddd]'></div>
      <div className='flex  flex-col  lg:flex-row   lg:ml-[8%] items-start pt-[60px]'>
        <div className='flex-1 px-[15px] mb-[60px]'>
          <h4 className='font-[600] text-[19px] text-[#232323]  mb-[5px]'>{t("plan-title")}</h4>
          <p className='leading-[24px] text-[13px] text-[#7a7a7a] ' >{t("plan-text")}</p>
          <div onClick={()=>setIsOpen(true)} >
            <Btn text={t("plan-btn")} style={"mt-[25px]"} />
          </div>
        </div>
        <div className='flex-1 px-[15px] '>
          <ul>
            {planLi.map((item) => (
              <li key={item.id} className='relative ' onClick={() => setId(id === item.id ? null : item.id)}>
                <a className={` w-ful block border-1 border-[#ddd] cursor-pointer font-semibold text-[17px] 
                tracking-[0.5px] text-[#232323]
                px-[20px] py-[15px]`}
                >{t(item.title)}</a>
                <span className={`${id === item.id ? "bg-[#e1ac0c]":"bg-[#ddd]"} absolute right-5 top-[22.5px] inline-block w-[15px] h-[15px]  rounded-full transition-all duration-200 `}></span>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-linear  ${id === item.id ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                >
                  <p className="p-[20px] text-[13px] text-[#7a7a7a] leading-[24px] border-1 border-[#ddd]">
                    {t(item.description)}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Plan