import React, { useState } from 'react'
import Btn from './Btn'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet';
function Banner({ setCloseModal }) {
  const { t } = useTranslation()

  const [formData, setFormData] = useState({
    name: "",
    location: "",
    date: new Date().toISOString().split("T")[0],
  });

  const botToken = "7536247365:AAEPJS6iaOdDRY-X9W3O9Db-PFU08Q_Yk_o";
  const chatId = "6539046942";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const text = `Yangi xabar!\n\n Ism: ${formData.name}\n\n Manzil: ${formData.location}\n\n soat: ${formData.date}`;

    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: text,
          parse_mode: "Markdown",
        }),
      });

      if (response.ok) {
        setCloseModal(true)
        setFormData({ name: "", location: "", date: new Date().toISOString().split("T")[0] });
      }
    } catch (error) {
      console.error("Yuborishda xatolik!", error);
    }
  };


  return (
    <>
      <Helmet>
        <title>Airvero – Sayohatingizni Bu Yerdan Boshlang</title>
        <meta name="description" content="Airvero yordamida sayohatlaringizni qulay va tez rejalashtiring. Eng yaxshi yo‘nalishlar, chiptalar va manzillar bir joyda." />
        <meta name="keywords" content="sayohat, aviachipta, yo‘nalish, Airvero, chipta olish, dam olish" />
        <meta property="og:title" content="Airvero – Sayohatingizni Bu Yerdan Boshlang" />
        <meta property="og:description" content="Sayohatni rejalashtirish, chiptalarni qidirish va yo‘nalishlarni topish uchun Airvero eng yaxshi tanlov." />
        <meta property="og:image" content="/home-bg.webp" />
        <meta property="og:url" content="https://www.airvero.uz/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Airvero – Sayohatingizni Bu Yerdan Boshlang" />
        <meta name="twitter:description" content="Sayohatni hozirdan rejalashtiring – Airvero bilan osongina." />
        <meta name="twitter:image" content="/home-bg.webp" />
      </Helmet>
      <section id='home' className='w-[100%] h-[100%]  banner-img'>
        <div className='relative w-full px-[25px] h-full  flex flex-col items-center'>
          <div className="absolute h-full w-full bg-black opacity-[0.3]"></div>
          <div className='flex flex-col   max-sm:w-full w-[80%] xl:w-[60%]'>
            <div data-aos="fade-up" className='py-[180px]'>
              <div className='w-[80px] h-[3px] bg-[#e1ac0c]'></div>
              <h1 className='my-5 text-[42px] text-white break-words font-bold  tracking-[0.5px]'>{t("banner-title")}</h1>
              <p className=' text-white text-[22px] tracking-[0.5px]'>{t("banner-sub-title")}</p>
              <a href="#popular">
                <Btn text={t("banner-btn")} style={"mr-auto mt-[30px] text-[15px]"} />
              </a>
            </div>
            <form onSubmit={handleSubmit} className='z-[99] p-[10px] flex flex-col lg:flex-row items-center justify-between  bg-white border-b-5 border-[#e1ac0c] '>
              <fieldset className='w-full lg:flex-1'>
                <input
                  required
                  autoComplete='off'
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className='p-[10px] max-lg:mb-[20px] max-lg:w-full text-[15px] bg-transparent text-gray-500 outline-hidden max-lg:border-b-1 lg:border-r-1 border-[#ddd]'
                  type="text"
                  placeholder={t("placeholderText")} />
              </fieldset>
              <fieldset className='w-full lg:flex-1'>
                <input
                  required
                  autoComplete='off'
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className='p-[10px] max-lg:mb-[20px] max-lg:w-full text-[15px] bg-transparent text-gray-500 outline-hidden max-lg:border-b-1 lg:border-r-1  border-[#ddd]'
                  type="text"
                  placeholder={t("placeholderLocation")} />
              </fieldset>
              <fieldset className='w-full lg:flex-1 flex lg:justify-center'>
                <input
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className='py-[10px] pr-[30px] max-lg:mb-[20px] max-lg:w-full   text-[15px] bg-transparent text-gray-500 outline-hidden max-lg:border-b-1 lg:border-r-1   border-[#ddd] mr-[5px]'
                  type="date"
                  min="2025-03-17"
                  max="2099-12-31" />
              </fieldset>
              <fieldset className='lg:flex-1 flex lg:justify-center w-full'>
                <Btn type={"submit"} text={t("btn1")} href={"#"} style={" w-full text-[17px] w-[100%]"} />
              </fieldset>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Banner