import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'
import GeminiBannerDesktop from '../assets/Gemini_GeneratedCroppedFinal_Image_25osk725osk725os.png'

const MainBanner = () => {
  return (
    <div className='relative'>

      {/* Desktop Image */}
      <img 
        // src={GeminiBannerDesktop} 
        src={assets.main_banner_bg}
        alt='banner' 
        className='w-full hidden md:block'
      />

      {/* Mobile Image */}
      <img 
        src={assets.main_banner_bg_sm} 
        alt='banner' 
        className='w-full md:hidden'
      />

      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col items-center md:items-start justify-end
        md:justify-center pb-24 md:pb-0 px-24 md:pl-18 lg:pl-24">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center md:text-left
          max-w-72 md:max-80 lg:max-w-105 leading-tight lg:leading-15">
          Bringing Freshness and Convenience Together.
        </h1>

        <div className="flex items-center gap-4 mt-6 font-medium">

          {/* Shop Now Button (Mobile) */}
          <Link 
            to={"/products"} 
            className="group flex items-center gap-2 px-7 md:px-9 py-3 bg-primary
              hover:bg-primary:hover transition text-white cursor-pointer rounded"
          >
            Shop now
            <img 
              className='md:hidden transition group-hover:translate-x-1' 
              src={assets.white_arrow_icon} 
              alt="arrow"
            />
          </Link>

          {/* Explore Deals (Desktop) */}
          <Link 
            to={"/products"} 
            className="group hidden md:flex items-center gap-2 px-9 py-3 cursor-pointer"
          >
            Explore Deals
            <img 
              className='transition group-hover:translate-x-1' 
              src={assets.black_arrow_icon} 
              alt="arrow"
            />
          </Link>

        </div>
      </div>

    </div>
  )
}

export default MainBanner
