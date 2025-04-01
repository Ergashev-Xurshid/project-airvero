import React, { useState } from 'react'
import Btn from './Btn'
import { IoClose } from "react-icons/io5";
import { useTranslation } from 'react-i18next';
function Modal({ setIsOpen }) {
  const { t } = useTranslation()

  const [formData, setFormData] = useState({
    name: "",
    textarya: "",
    number: "",
    email: ""
  });

  const botToken = "7536247365:AAEPJS6iaOdDRY-X9W3O9Db-PFU08Q_Yk_o";
  const chatId = "6539046942";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const text = `Yangi xabar!\n\n Ism: ${formData.name}\n\n Email: ${formData.email}\n\n number: ${formData.number} \n ${formData.textarya}`;

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
        setFormData({
          name: "",
          textarya: "",
          number: "",
          email: ""
        });
        setIsOpen(false)
      }
    } catch (error) {
      console.error("Yuborishda xatolik!", error);
    }
  };


  return (
    <div className='fixed overflow-y-auto  w-full h-100% bg-[#000000a6] py-[10%] bottom-0 left-0 right-0 top-0'>
      <div data-aos="fade-up" className='relative w-[80%] lg:w-[60%] mx-auto shadow-lg rounded-lg bg-white '>
        <div onClick={() => setIsOpen(false)} className='absolute right-1/2 lg:right-[-30px] translate-x-[50%] top-[-30px] w-[60px] h-[60px] z-[9999] bg-white rounded-full flex items-center justify-center cursor-pointer'><IoClose size="20px" color='#e1ac0c' /></div>
        <div className='flex lg:flex-row flex-col'>
          <div className='p-[30px] [w-55%]'>
            <div>
              <span className='block text-[17px]  text-[#e1ac0c]'>{t("modal-form-subTitle")}</span>
              <h2 className='mt-[10px] mb-[30px]  text-[23px] text-[#232323] tracking-[0.5px] font-semibold'>{t("modal-form-title")}</h2>
            </div>
            <form onSubmit={handleSubmit} className='flex flex-wrap gap-[30px] '>
              <fieldset className='w-full lg:w-[45%] '>
                <input
                  required
                  autoComplete='off'
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className='px-[15px] text-[13px] text-[#aaa] bg-[#f4f4f4] border-1 border-[#eee] outline-none leading-[40px] h-[40px] w-full mb-[25px] '
                  type="text"
                  placeholder={t("placeholderText")}
                />
              </fieldset>
              <fieldset className='w-full lg:w-[45%]'>
                <input
                  required
                  autoComplete='off'
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className='px-[15px] text-[13px] text-[#aaa] bg-[#f4f4f4] border-1 border-[#eee] outline-none leading-[40px] h-[40px] w-full mb-[25px] '
                  type="email"
                  placeholder={t("placeholderEmail")}
                />
              </fieldset>
              <fieldset className='w-full lg:w-[45%]'>
                <input
                  required
                  autoComplete='off'
                  name="number"
                  value={formData.number}
                  onChange={handleChange}
                  className=' px-[15px] text-[13px] text-[#aaa] bg-[#f4f4f4] border-1 border-[#eee] outline-none leading-[40px] h-[40px] w-full mb-[25px] '
                  type="number"
                  placeholder={t("placeholderPhone")}
                />
              </fieldset>
              <fieldset className='w-full'>
                <textarea
                  required
                  autoComplete='off'
                  name="textarya"
                  value={formData.textarya}
                  onChange={handleChange}
                  className='px-[15px] text-[13px] text-[#aaa] bg-[#f4f4f4] border-1 border-[#eee] outline-none leading-[40px] h-[160px] max-h-[180px] w-full max-w-full mb-[20px] '
                  placeholder={t("placeholderTextAria")}
                ></textarea>
              </fieldset>
              <fieldset>
                <a href="#contact2">
                  <Btn text={t("btn1")} />
                </a>
              </fieldset>
            </form>
          </div>
          <div className='bg-[#e1ac0c] p-[30px] pb-[65px] text-white w-[100%] lg:w-[45%]  rounded-b-lg'>
            <div className='mb-[30px]'>
              <span className=' text-[18px]'>{t("modal-content-subTitle")}</span>
              <h2 className=' text-[23px] font-semibold mt-[10px]'>{t("modal-content-title")}</h2>
            </div>
            <p className=' text-[13px] leading-[24px] mb-[50px]'>
              {t("modal-content-text")}
            </p>
            <ul>
              <li>
                <span className=' inline-block font-semibold w-[80px]  text-[13px] leading-[24px] '>{t("modal-ul-items-phone")}:</span>
                <a href="+998-95-127-00-90" className=' font-semibold w-[80px]  text-[13px] '>+998-95-127-00-90</a>
              </li>
              <li>
                <span className=' inline-block font-semibold w-[80px]  text-[13px] leading-[24px] '>{t("modal-ul-items-email")}:</span>
                <a href="mailto:flymoderntravel@mail.ru" className=' font-semibold w-[80px]  text-[13px] '>flymoderntravel@mail.ru</a>
              </li>
              <li>
                <span className=' inline-block font-semibold w-[80px]  text-[13px] leading-[24px] '>{t("modal-ul-items-location")}:</span>
                <a className=' font-semibold w-[80px]  text-[13px] '>{t("Address")}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal