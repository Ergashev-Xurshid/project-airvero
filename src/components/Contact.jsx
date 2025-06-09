import React from 'react'
import Btn from './Btn'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet'

function Contact({ setIsOpen }) {
  const { t } = useTranslation()
  return (
    <>
      <Helmet>
        <title>Biz bilan bog‘lanish – Airvero</title>
        <meta name="description" content="Savollaringiz bormi? Airvero bilan bog‘laning – sizga doimo yordam berishga tayyormiz!" />
        <meta name="keywords" content="aloqa, bog‘lanish, mijozlar xizmati, savollar, Airvero kontakt" />
        <meta property="og:title" content="Biz bilan bog‘lanish – Airvero" />
        <meta property="og:description" content="Biz bilan bog‘laning – Airvero sizga qulay sayohat xizmatlarini taklif qiladi." />
        <meta property="og:image" content="/home-bg.webp" />
        <meta property="og:url" content="https://www.airvero.uz/contact" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Bog‘lanish – Airvero" />
        <meta name="twitter:description" content="Airvero jamoasi bilan hoziroq bog‘laning – savollaringiz bo‘lsa, yordam beramiz." />
      </Helmet> 
      <div id='contact2' className='py-[10px] md:py-[50px] lg:py-[80px]  flex justify-center '>
        <div className='text-center mb-[60px] w-full md:w-[50%] lg:w-[30%]'>
          <span className='text-[17px] text-[#e1ac0c]'>{t("contact-sub-title")}</span>
          <h2 className='mt-[14px] text-lg lg:text-[23px] font-[600] text-[#232323] tracking-[0.5px]'>{t("contact-title")}</h2>
          <h4 className='text-[15px] lg:text-[18px] mb-[10px] mt[25px] text-[#2c343b]'>{t("contact-author")}</h4>
          <h2 className='text-[23px] mt-[14px]'>
            <a href="tel:+998951270090" className='text-[#e1ac0c] font-semibold hover:underline'>+998951270090</a>
          </h2>
          <div onClick={() => setIsOpen(true)}>
            <a href="#contact2">
              <Btn text={t("btn2")} style={"mt-[30px]"} />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact