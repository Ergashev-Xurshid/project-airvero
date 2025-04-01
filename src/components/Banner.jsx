import React, { useState } from 'react'
import Btn from './Btn'
import { useTranslation } from 'react-i18next'
function Banner() {
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
        alert("Biz tez orada siz bilan bog'lanamiz, rahmat!");
        setFormData({ name: "", location: "", date: new Date().toISOString().split("T")[0] });
      }
    } catch (error) {
      console.error("Yuborishda xatolik!", error);
    }
  };


  return (
    <section id='home' className='w-[100%] h-[100%] banner-img'>
      <div className='w-full px-[25px]  flex flex-col items-center'>
        <div className='flex flex-col  max-sm:w-full w-[80%] xl:w-[60%]'>
          <div className='py-[200px]'>
            <div className='w-[80px] h-[3px] bg-[#e1ac0c]'></div>
            <h1 className='my-5 text-[42px] text-white break-words tracking-[0.5px]'>{t("banner-title")}</h1>
            <p className=' text-white text-[22px] tracking-[0.5px]'>{t("banner-sub-title")}</p>
            <a href="#popular">
            <Btn text={t("banner-btn")} style={"mr-auto mt-[30px] text-[15px]"} />
            </a>
          </div>
          <form onSubmit={handleSubmit} className='p-[10px] flex flex-col lg:flex-row items-center justify-between  bg-white border-b-5 border-[#e1ac0c] '>
            <fieldset className='w-full lg:flex-1'>
              <input
                required
                autoComplete='off'
                name="name"
                value={formData.name}
                onChange={handleChange}
                className='p-[10px] max-lg:mb-[20px] max-lg:w-full text-[15px] bg-transparent text-[#9a9a9a] outline-hidden max-lg:border-b-1 lg:border-r-1 border-[#ddd]'
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
                className='p-[10px] max-lg:mb-[20px] max-lg:w-full text-[15px] bg-transparent text-[#9a9a9a] outline-hidden max-lg:border-b-1 lg:border-r-1  border-[#ddd]'
                type="text"
                placeholder={t("placeholderLocation")} />
            </fieldset>
            <fieldset className='w-full lg:flex-1 flex lg:justify-center'>
              <input
                name="date"
                value={formData.date}
                onChange={handleChange}
                className='py-[10px] pr-[30px] max-lg:mb-[20px] max-lg:w-full   text-[15px] bg-transparent text-[#9a9a9a] outline-hidden max-lg:border-b-1 lg:border-r-1   border-[#ddd] mr-[5px]'
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
  )
}

export default Banner