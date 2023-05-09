import React from 'react';

interface MobileMenuProps {
  visible?: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ visible }) => {
  if (!visible) {
    return null;
  }

  return (
    <div className='bg-black w-56 absolute top-8 left-0 py-5 flex-col border-gray-800 flex'>
      <div className='flex flex-col gap-4'>
        <div className='px-3 text-center text-white hover:underline'>
          Trang chủ
        </div>
        <div className='px-3 text-center text-white hover:underline'>
          Khóa học
        </div>
        <div className='px-3 text-center text-white hover:underline'>
          Tin tức
        </div>
        <div className='px-3 text-center text-white hover:underline'>
          Cảm nhận
        </div>
        <div className='px-3 text-center text-white hover:underline'>
          Liên hệ
        </div>
        <div className='px-3 text-center text-white hover:underline'>
          Hỗ trợ 
        </div>
      </div>
    </div>
  )
}

export default MobileMenu;