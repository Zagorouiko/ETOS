

function Footer() {


    return (
    <div className="bg-[#EDF2F4] h-2/5 w-full flex flex-col justify-between">

      <div className="flex flex-row w-full h-full">

        <div className="brand w-[40%] h-full flex flex-row justify-start ">

          <div className="flex flex-col w-full h-full justify-between ">

            <div className="ml-10 mt-10 flex flex-row">
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
              <div className="text-3xl font-loreda">
                ETOS
              </div>
            </div>

            <div className="newsletter w-auto flex items-center  mb-14 font-maisonNeue_light text-xl text-[#2B2B2B] border-b-2 border-[#2B2B2B] mx-32">
              <div className="mr-20">Sign up for our newsletter</div>
              <div>
                <div className="group">
                  <svg className="cursor-pointer transition duration-500 ease-in-out" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="transition duration-500 ease-in-out fill-black group-hover:fill-white" d="M25 42C15.6 42 8 34.4 8 25C8 15.6 15.6 8 25 8C34.4 8 42 15.6 42 25C42 34.4 34.4 42 25 42ZM25 10C16.7 10 10 16.7 10 25C10 33.3 16.7 40 25 40C33.3 40 40 33.3 40 25C40 16.7 33.3 10 25 10Z" fill="white"/>
                    <path className="transition duration-500 ease-in-out fill-black group-hover:fill-white" d="M24.7001 34.6998L23.3 33.2998L31.6 24.9998L23.3 16.6998L24.7001 15.2998L34.4001 24.9998L24.7001 34.6998Z" fill="white"/>
                    <path className="transition duration-500 ease-in-out fill-black group-hover:fill-white" d="M16 24H33V26H16V24Z" fill="white"/>
                  </svg>
                </div>
              </div>
            </div>

          </div>

        </div>

        <div className="w-[60%] h-full ">
          <div className="flex flex-row h-full w-full">
            <div className="w-[25%] h-full  mt-10">
              <div className="font-maisonNeue_medium mb-4">SOCIAL</div>
              <div className="text-[12px] font-maisonNeue_light">Facebook</div>
              <div className="text-[12px] font-maisonNeue_light mt-1">Instagram</div>
              <div className="text-[12px] font-maisonNeue_light mt-1">Linkedin</div>
              <div className="text-[12px] font-maisonNeue_light mt-1">Twitter</div>
            </div>
            <div className="w-[25%] h-full  mt-10">
              <div className="font-maisonNeue_medium mb-4">SERVICES</div>
              <div className="text-[12px] font-maisonNeue_light">Lorem Ipsum</div>
              <div className="text-[12px] font-maisonNeue_light mt-1">Lorem Ipsum</div>
              <div className="text-[12px] font-maisonNeue_light mt-1">Lorem Ipsum</div>
              <div className="text-[12px] font-maisonNeue_light mt-1">Lorem Ipsum</div>
              <div className="text-[12px] font-maisonNeue_light">Lorem Ipsum</div>
              <div className="text-[12px] font-maisonNeue_light mt-1">Lorem Ipsum</div>
              <div className="text-[12px] font-maisonNeue_light mt-1">Lorem Ipsum</div>
              <div className="text-[12px] font-maisonNeue_light mt-1">Lorem Ipsum</div>
            </div>

            <div className="w-[25%] h-full-500 mt-10">
              <div className="font-maisonNeue_medium mb-4">CONTACT US</div>
              <div className="text-[12px] font-maisonNeue_light">Lorem Ipsum</div>
              <div className="text-[12px] font-maisonNeue_light mt-1">Lorem Ipsum</div>
              <div className="text-[12px] font-maisonNeue_light mt-1">Lorem Ipsum</div>
              <div className="text-[12px] font-maisonNeue_light mt-1">Lorem Ipsum</div>

            </div>
            <div className="w-[25%] h-full  mt-10">
             <div className="font-maisonNeue_medium mb-4">ABOUT</div>
             <div className="text-[12px] font-maisonNeue_light">Lorem Ipsum</div>
              <div className="text-[12px] font-maisonNeue_light mt-1">Lorem Ipsum</div>
              <div className="text-[12px] font-maisonNeue_light mt-1">Lorem Ipsum</div>
              <div className="text-[12px] font-maisonNeue_light mt-1">Lorem Ipsum</div>
              <div className="text-[12px] font-maisonNeue_light mt-1">Lorem Ipsum</div>
            </div>
          </div>
        </div>

      </div>

      <div className="bottomFooter flex w-full h-[10%] bottom-0 bg-[#D9D9D9] maisonNeue_light justify-end">
        <div className=" text-[#898989] flex flex-row w-1/3 justify-center items-center h-full ">
          <div className="hover:text-[#252525] cursor-pointer transition duration-500 ease-in-out mr-20">Terms and Conditions</div>
          <div className="hover:text-[#252525] cursor-pointer transition duration-500 ease-in-out">Privacy Policy</div>
        </div>
      </div>
    </div>
    )
  }
  
  
  export default Footer
  