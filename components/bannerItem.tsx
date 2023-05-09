import React from 'react';

interface BannerItemProps {
  label: string
}


const BannerItem: React.FC<BannerItemProps> = ({
  label
}) => {
  return (
    <div className="text-white cursor-pointer hover:text-yellow-300 transition">
      {label}
    </div>
  )
}

export default BannerItem;