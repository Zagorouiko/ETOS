

function Carousel1() {


    return (
    <div className="bg-[#EDF2F4] h-5/6 w-full">
      
      <div className="w-[90%] mx-auto flex flex-row justify-end pt-5">
          <div className="group">
            <svg className="cursor-pointer transition duration-500 ease-in-out" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className="transition duration-500 ease-in-out fill-black group-hover:fill-slate-400" d="M25 8C34.4 8 42 15.6 42 25C42 34.4 34.4 42 25 42C15.6 42 8 34.4 8 25C8 15.6 15.6 8 25 8ZM25 40C33.3 40 40 33.3 40 25C40 16.7 33.3 10 25 10C16.7 10 10 16.7 10 25C10 33.3 16.7 40 25 40Z" fill="#252525"/>
            <path className="transition duration-500 ease-in-out fill-black group-hover:fill-slate-400" d="M25.2999 15.2999L26.7 16.7L18.4 25L26.7 33.3L25.2999 34.7L15.5999 25L25.2999 15.2999Z" fill="#252525"/>
            <path className="transition duration-500 ease-in-out fill-black group-hover:fill-slate-400" d="M34 26L17 26V24L34 24V26Z" fill="#252525"/>
            </svg>
          </div>

          <div className="group">
            <svg className="cursor-pointer transition duration-500 ease-in-out" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className="transition duration-500 ease-in-out fill-black group-hover:fill-slate-400" d="M25 42C15.6 42 8 34.4 8 25C8 15.6 15.6 8 25 8C34.4 8 42 15.6 42 25C42 34.4 34.4 42 25 42ZM25 10C16.7 10 10 16.7 10 25C10 33.3 16.7 40 25 40C33.3 40 40 33.3 40 25C40 16.7 33.3 10 25 10Z" fill="#252525"/>
            <path className="transition duration-500 ease-in-out fill-black group-hover:fill-slate-400" d="M24.7001 34.7001L23.3 33.3L31.6 25L23.3 16.7L24.7001 15.3L34.4001 25L24.7001 34.7001Z" fill="#252525"/>
            <path className="transition duration-500 ease-in-out fill-black group-hover:fill-slate-400" d="M16 24H33V26H16V24Z" fill="#252525"/>
            </svg>
          </div>
      </div>

      <div className="flex flex-row w-full h-full justify-center items-center">
        <div className="h-[80%] w-[35%]  mr-10">
          <div className="m-20">
            <div className="text-2xl font-maisonNeue_medium mb-5">Pioneering Growth</div>
            <div className="font-maisonNeue_light">Supported by our proprietary marketing technology platform, Ada by  ETOS®, we combine creativity, data and tech to ideate and implement  winning media strategies that cut through in crowded markets.</div>
          </div>
        </div>
        <div className="h-[80%] w-[25%]  mr-10">
            <img className="w-full h-[85%] mb-2" src="/image4.jpg" alt="" />
            <div className="m-5">
              <div className="text-2xl font-maisonNeue_medium mb-2">Title</div>
              <div className="font-maisonNeue_light">Fashion enthusiasts rejoice with an optimized SEO strategy </div>
            </div>
        </div>
        <div className="h-[80%] w-[25%] ">
          <img className="w-full h-[85%] mb-2" src="/image5.jpg" alt="" />
              <div className="m-5">
                <div className="text-2xl font-maisonNeue_medium mb-2">Title</div>
                <div className="font-maisonNeue_light">Helping eBay start a conversation with the world  </div>
              </div>
        </div>
      </div>
    </div>
    )
  }
  
  
  export default Carousel1
  