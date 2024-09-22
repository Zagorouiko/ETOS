import { useEffect, useRef, useState } from "react"
import Headroom from "react-headroom"

function Header() {
  const navRef = useRef(null)

  return (
      <div className="bg-[#EDF2F4] h-full w-full ">

        <Headroom 
        onPin={() => 
          navRef.current.style.backgroundColor = '#EDF2F4'
        }
        style={{
          WebkitTransition: 'all .3s ease-in-out',
          MozTransition: 'all .3s ease-in-out',
          OTransition: 'all .3s ease-in-out',
          transition: 'all .3s ease-in-out'
        }}>

        <div className="navbar flex flex-row w-full items-center py-3" ref={navRef}>
          <div className="brand w-1/2 flex flex-row justify-start items-center ml-10">
            <svg width="45" height="40" viewBox="0 0 45 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_0_1)">
              <path fillRule="evenodd" clipRule="evenodd" d="M24.75 4L43.5 36.5H6L24.75 4Z" fill="#252525"/>
              </g>
              <path fillRule="evenodd" clipRule="evenodd" d="M19.5 0L17.8693 2.75825L1.625 30.25L0 33H39L37.375 30.25L21.1307 2.75825L19.5 0ZM19.5 5.5165L4.8863 30.25H34.1109L19.5 5.5165Z" fill="#3A3A3A"/>
              <defs>
              <clipPath id="clip0_0_1">
              <rect width="40" height="40" fill="white" transform="translate(5)"/>
              </clipPath>
              </defs>
            </svg>
            <div className="ml-5 text-3xl font-loreda">ETOS</div>
          </div>

          <div className="navlinks w-1/2 flex flex-row justify-end">
            <div className="flex justify-around w-full font-maisonNeue_medium font-[24px]">
              <div className="hover:text-gray-400 cursor-pointer transition duration-500 ease-in-out">Work</div>
              <div className="hover:text-gray-400 cursor-pointer transition duration-500 ease-in-out">About</div>
              <div className="hover:text-gray-400 cursor-pointer transition duration-500 ease-in-out">What We Do</div>
              <div className="hover:text-gray-400 cursor-pointer transition duration-500 ease-in-out">Contact</div> 
            </div>
          </div>

        </div>
        </Headroom>

        <div className="h-full w-full">
          <div className="headerText text-6xl font-maisonNeue_bold m-20 flex flex-row w-2/3"> 
          Lorem ipsum odor amet, consectetuer adipiscing elit.
          </div>

          <div className="video mx-20">
            <video className="video" src="/FlowerVideo.mov" autoPlay loop muted />
          </div>
        </div>

      </div>
  )
}


export default Header
