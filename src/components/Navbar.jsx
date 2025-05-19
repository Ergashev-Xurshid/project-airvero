import React, { useEffect, useRef, useState } from 'react'
import { close, logo, menu, } from '../assets'
import { useTranslation } from 'react-i18next'
import { menuLinks } from '../utils/consttanta'

function Navbar() {
  const laungageSelect = localStorage.getItem("i18nextLng") || "uz"

  const { t, i18n } = useTranslation()
  const [toggle, setToggle] = useState(false)

  const handleChange = (e) => {
    const selectedLanguage = e.target.value;
    i18n.changeLanguage(selectedLanguage)
  }

  const menuRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setToggle(false);
      }
    };
  
    document.addEventListener("click", handleClickOutside);
  
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  

  return (
    <header  className='fixed top-0 left-0 w-full bg-white shadow-md z-[10000]'>
      <section className='flex items-center justify-between py-[10px] px-[10px] sm:px-20 sm:max-w-[100%] mx-auto'>
        {/* logo */}
        <a href="#home">
          <div className='flex flex-col items-center'>
            <img className='w-[100px] h-auto' src={logo} alt="logo" />
            <h2 className='font-bold text-black text-lg  leading-4'>Airvero</h2>
            <h5 className='font-bold text-black text-[12px] '>AVIAKASSA VISA TOURISM</h5>
          </div>
        </a>
        <nav>
          {/*desktop menu */}
          <ul className='hidden lg:flex  items-center'>
            {menuLinks.map((item, i) => (
              <li className={`${menuLinks.length - 1 == i ? "mr-0" : "mr-[60px]"}`} key={i}>
                <a className='font-[700] text-[17px] leading-[100px] text-[#121212] hover:text-[#e1ac0c] transition-all duration-500' href={`#${item.id}`}>{t(item.titleKey)}</a>
              </li>
            ))}
            <li className='ml-[60px] '>
              <select className='font-semibold cursor-pointer border-none  appearance-none pl-4 pr-8  outline-none' onChange={handleChange} value={laungageSelect}>
                <option className='font-semibold' value="uz">Uzb</option>
                <option className='font-semibold' value="ru">Rus</option>
                <option className='font-semibold' value="en">Eng</option>
              </select>
            </li>
          </ul>
          <div className='flex gap-5 lg:hidden px-3 '>
            {/*lng*/}
            <select className='font-semibold cursor-pointer border-none  appearance-none pl-4 pr-8  outline-none' onChange={handleChange} value={laungageSelect}>
              <option className='font-semibold' value="uz">Uzb</option>
              <option className='font-semibold' value="ru">Rus</option>
              <option className='font-semibold' value="en">Eng</option>
            </select>
            {/* humburger */}
            <div ref={menuRef} onClick={() => setToggle(!toggle)} className=' w-[65px] h-[65px] p-[20px] bg-[#e1ac0c]'>
              <img src={toggle ? close : menu} alt="menu" />
            </div>
          </div>
          {/* mobile menu */}
          <ul  className={`block bg-white lg:hidden absolute w-full lg:w-[60%] 
          z-[999]
          left-[50%] top-30 
          translate-x-[-50%] text-center
          transition-all duration-500 
          ${toggle ? "opacity-100 visible translate-y-[-15px]" : "opacity-0 invisible translate-y-[-50px]"}
        `}>
            {menuLinks.map((item, i) => (
              <li className={`
              ${menuLinks.length - 1 == i ? "mr-0 " : "mb-[30px] border-b-1 border-gray-300"}`}
                key={i}>
                <a onClick={() => setToggle(false)} className='font-[700] text-[17px] leading-[100px] text-[#121212] hover:text-[#e1ac0c] transition-all decoration-[0.5s]' href={`#${item.id}`}>{t(item.titleKey)}</a>
              </li>
            ))}
          </ul>
        </nav>
      </section>
    </header>
  )
}

export default Navbar