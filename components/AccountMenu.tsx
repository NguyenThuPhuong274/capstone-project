import React from 'react';

interface AccountMenuProps {
  visible?: boolean;
}

const AccountMenu: React.FC<AccountMenuProps> = ({
  visible
}) => {
  if (!visible) {
    return null;
  }

  return (
    <div className="bg-black w-56 absolute top-14 right-0 py-5 flex-col boder-2 border-gray-800 flex">
      <div className="flex flex-col gap-3">
        <div className="px-5 group/item flex flex-row gap-3 items-center w-full">
          <img className="w-4 rounded-md" src="/images/icon-user.png" alt="User" />
          <p className="px-10 text-white text-sm group-hover/item:underline hover:text-yellow-300">
            Username
          </p>
        </div>
        <hr className="bg-gray-600 border-0 h-px my-4" />
        <div className="px-3 text-center text-white text-sm hover:underline hover:text-yellow-300">
          Đăng xuất
        </div>
      </div>
    </div>
  )
}

export default AccountMenu;