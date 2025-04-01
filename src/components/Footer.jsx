import React from 'react'
import { logo } from '../assets'
import { IoLogoInstagram } from "react-icons/io";
import { useTranslation } from 'react-i18next';
import { menuLinks } from '../utils/consttanta';
function Footer() {
  const { t } = useTranslation()
  return (
    <footer>
      <div className='flex flex-col lg:flex-row justify-between items-start pb-[70px] px-[15px] lg:px-[100px] xl:px-[180px] '>
        <div className='flex-1 px-[15px]'>
          <div className='flex flex-col items-center mb-[40px]'>
            <img className='w-[100px] h-auto' src={logo} alt="logo" />
            <h2 className='font-bold text-black text-lg  leading-4'>FLY MODERN</h2>
            <h5 className='font-bold text-black text-[12px] '>AVIAKASSA VISA TOURISM</h5>
          </div>
          <p className=' text-[#7a7a7a] text-[13px] leading-[24px] mb-[25px] '>{t("f-logo-text")}</p>
          <a href='https://www.instagram.com/flymodern_travel/' target='_blank' className='flex justify-center items-center cursor-pointer w-[32px] h-[32px] rounded-full bg-[#cdcdcd] hover:bg-[#e1ac0c] transition-all duration-500 '>
            <IoLogoInstagram color='white' />
          </a>
        </div>
        <div className='flex-1 px-[15px]'>
          <h4 className='font-normal text-[#232323] text-[21px] mt-[15px] mb-[40px] leading-[1.1]'>{t("f-link")}</h4>
          <ul>
            {menuLinks.map((item, i) => (
              <li className='mb-[12px] flex items-center space-x-2' key={i}>
                <span className="text-[#e1ac0c]">■</span>
                <a className='text-[#7a7a7a] hover:text-[#e1ac0c] text-[15px] font-normal transition-all duration-200' href={`#${item.id}`}>{t(item.titleKey)}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className='flex-1 px-[15px]'>
          <h4 className='font-normal text-[#232323] text-[21px] mt-[15px] mb-[40px] leading-[1.1]'>{t("f-info-title")}</h4>
          <p className=' text-[#7a7a7a] text-[13px] leading-[24px] mb-[25px]'>{t("f-info-text")}</p>
          <ul>
            <li>
              <span className=' inline-block font-semibold w-[80px] text-[#7a7a7a] text-[13px] leading-[24px] '>{t("modal-ul-items-phone")}:</span>
              <a href="+998-95-127-00-90" className=' font-semibold w-[80px] text-[#e1ac0c] text-[13px] '>+998-95-127-00-90</a>
            </li>
            <li>
              <span className=' inline-block font-semibold w-[80px] text-[#7a7a7a] text-[13px] leading-[24px] '>{t("modal-ul-items-email")}:</span>
              <a href="mailto:flymoderntravel@mail.ru" className=' font-semibold w-[80px] text-[#e1ac0c] text-[13px] '>flymoderntravel@mail.ru</a>
            </li>
            <li>
              <span className=' inline-block font-semibold w-[80px] text-[#7a7a7a] text-[13px] leading-[24px] '>{t("modal-ul-items-location")}:</span>
              <a href="#" className=' font-semibold w-[80px] text-[#e1ac0c] text-[13px] '>{t("Address")}</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer