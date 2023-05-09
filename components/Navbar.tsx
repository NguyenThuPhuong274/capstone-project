import {BsChevronDown} from 'react-icons/bs';
import {CiUser} from 'react-icons/ci'
import { useCallback, useEffect, useState } from "react";

import NavbarItem from "./NavbarItem";
import MobileMenu from "./MobileMenu";
import AccountMenu from "./AccountMenu";

const TOP_OFFSET = 46;

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setShowMobileMenu((current) => !current)
  }, []);

  const toggleAccountMenu = useCallback(() => {
    setShowAccountMenu((current) => !current)
  }, []);

  return (
    <nav className="w-full fixed z-40 bg-zinc-900">
      <div 
        className={`
          px-4
          md:px-16
          py-5
          flex
          flex-row
          items-center
          transition
          duration-500
          ${showBackground ? 'bg-zinc-900 bg-opacity-90' : ''}
        `}
      >
          <img className="h-4 lg:h-20" src="/images/logo-tu-hoc-tieng-nhat.png" alt="Logo" />
          <div
            className="
              flex-row
              ml-40
              gap-10
              hidden
              lg:flex
            "
          >
            <NavbarItem label="Trang chủ" />
            <NavbarItem label="Khóa học" />
            <NavbarItem label="Tin tức" />
            <NavbarItem label="Cảm nhận" />
            <NavbarItem label="Liên hệ" />
            <NavbarItem label="Hỗ trợ" />
          </div>
          <div onClick={toggleMobileMenu} className="lg:hidden flex flex-rơ items-center gap-2 ml-8 cursor-pointer relative">
            <p className="text-white text-sm">Home</p>
            <BsChevronDown className={`text-white transition ${showMobileMenu ? 'rotate-180' : 'rotate-0'}`} />
            <MobileMenu visible={showMobileMenu} />
          </div>
          <div onClick={toggleAccountMenu} className="flex flex-row ml-auto gap-4 items-center">
            <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
              <CiUser size={30} />
              {/* <img className="h-4 lg:h-8" src="/images/icon-user.png" alt="User" /> */}
            </div>
            <BsChevronDown className={`text-white transition ${showAccountMenu ? 'rotate-180' : 'rotate-0'}`} />
            <AccountMenu visible={showAccountMenu} />
            <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
              <img className="h-4 lg:h-8 gap-4" src="/images/icon-phone.png" alt="User" />
              <p className="text-yellow-300">0971204291</p>
            </div>
          </div>
      </div>
    </nav>
  )
}

export default Navbar;