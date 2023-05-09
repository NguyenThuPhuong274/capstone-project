import BannerItem from "./bannerItem";

const Banner = () => {
  return (
    <div className="w-full fixed top-2">
      <div 
        className={`
          px-10
          md:px-16
          py-40
          flex
          flex-row
          items-center
          transition
          duration-500
          
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
            <BannerItem label="Trang chủ" />
            <BannerItem label="Khóa học" />
            <BannerItem label="Tin tức" />
            <BannerItem label="Cảm nhận" />
            <BannerItem label="Liên hệ" />
            <BannerItem label="Hỗ trợ" />
          </div>
          </div>
    </div>
  )
}

export default Banner;