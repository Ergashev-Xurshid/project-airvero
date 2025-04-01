import React from 'react'
import { discoverCard } from '../utils/consttanta'
import { LiaStarSolid } from "react-icons/lia";
import { useTranslation } from 'react-i18next';
function Discover() {
  const {t}=useTranslation()
  return (
    <div id='about' className='mt-[80px] py-[80px] bg-[#f4f4f4] px-[15px] lg:px-[100px] xl:px-[200px] '>
      <div className='text-center mb-[60px]'>
        <span className='text-[17px] text-[#e1ac0c]'>{t("discover-sub-title")}</span>
        <h2 className='mt-[14px] text-[23px] font-[600] text-[#232323] tracking-[0.5px]'>{t("discover-title")}</h2>
      </div>
      <div className='flex flex-wrap lg:flex-nowrap justify-center  lg:justify-between items-start gap-[30px]'>
        {discoverCard.map((item)=> (
          <div key={item.id} className='h-auto w-full md:w-[45%] lg:w-[33%] bg-white shadow-xl rounded-[5px]'>
            <div className=' relative  overflow-hidden rounded-t-[5px]'>
              <img src={item.image} alt={item.title} />
              <ul className='flex absolute top-[20px] left-[20px]'>
                <li><LiaStarSolid color='white'/></li>
                <li><LiaStarSolid color='white'/></li>
                <li><LiaStarSolid color='white'/></li>
                <li><LiaStarSolid color='white'/></li>
                <li><LiaStarSolid color='white'/></li>
              </ul>
            </div>
            <div className='p-5'>
              <h4 className='font-[600] text-[19px] text-[#232323] mb-[5px]'>{t(item.title)}</h4>
              <span  className='block  text-[13px] text-[#e1ac0c] mb-[15px]'>{t(item.subTitle)}</span>
              <p  className='leading-[24px] text-[13px] text-[#7a7a7a] ' >{t(item.description)}</p>
            </div>
            <div className='flex justify-between'>
              <div className='w-[50%] text-center h-[50px] border-t-1 border-r-1  border-[#ddd]'>
                 <a className='tracking-[0.5px] w-full leading-[50px]  text-[12px] text-[#7a7a7a] transition-all duration-500 hover:text-[#e1ac0c]' href="tel:+998 97 442 03 08">{t("d-btn-1")}</a>
              </div>
              <div className='w-[50%] text-center h-[50px] border-t-1 border-[#ddd]'>
                <a  className='tracking-[0.5px] w-full leading-[50px] text-[12px] text-[#7a7a7a] transition-all duration-500 hover:text-[#e1ac0c]' href="#contact2">{t("d-btn-2")}</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Discover