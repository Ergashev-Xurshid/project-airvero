import React from 'react'
import { offerCard } from '../utils/consttanta'
import Btn from './Btn'
import { useTranslation } from 'react-i18next'

function Offer() {
  const {t}=useTranslation()
  return (
    <div>
      <div className='px-[15px] lg:px-[100px] xl:px-[200px] py-[80px]'>
        <div className='text-center mb-[60px]'>
          <span className='text-[17px] text-[#e1ac0c]'>{t("offer-sub-title")}</span>
          <h2 className='mt-[14px] text-[23px] font-[600] text-[#232323] tracking-[0.5px]'>{t("offer-title")}</h2>
        </div>
        <div className='flex flex-wrap lg:flex-nowrap justify-center  lg:justify-between items-start gap-[30px]'>
          {offerCard.map((item) => (
            <div key={item.id} className='overflow-hidden h-auto w-full md:w-[45%] lg:w-[35%] bg-[#eee] border-1 border-[#ddd] rounded-[10px] '>
              <div className='w-full text-center bg-[#e1ac0c] p-[30px]'>
                <h4 className='font-[600] text-[19px] text-white mb-[5px]'>{t(item.type)}</h4>
                <h1 className='font-[700] text-[32px] text-white mt-[20px] mb-[10px] tracking-[0.5px]'>{t(item.title)}</h1>
                <span className='text-white'>{t(item.subTitle)}</span>
              </div>
              {item.links.map((i, idx) => (
                <ul key={idx} className='my-[40px] text-center'>
                  <li className='my-[10px]'>
                    <a href="#" className='text-[#4a4a4a] hover:text-[#e1ac0c] text-[14px] font-normal transition-all duration-200' >{t(i)}</a>
                  </li>
                </ul>
              ))}
              <div className='pb-[40px] text-center'>
                <Btn text={t("offer-btn")} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <iframe 
        id='contact'
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d95854.27594641913!2d69.262273!3d41.342656!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8d0a3eff6793%3A0x374f8cd599c1c8fa!2sYagona%20Darcha%20Shaykhontokhur%20tumani!5e0!3m2!1sen!2sus!4v1743192200181!5m2!1sen!2sus"
        width="100%"
        height="500"
        style={{ border: "0" }} 
        allowFullScreen 
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade" 
      ></iframe>
    </div>


  )
}

export default Offer