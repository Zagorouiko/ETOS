

function Carousel2() {


    return (
      <div className="bg-[#252525] h-full w-full ">
       <div className="flex flex-col h-full">
          <div className="flex flex-row w-full h-[80%] justify-center items-center text-white ">
            <div className="h-[60%] w-[22%]  mr-10">
                  <img className="w-full h-[85%]" src="/image2.jpg" alt="" />
                  <div className="m-5">
                    <div className="text-lg font-maisonNeue_medium mb-2">INSPIRE</div>
                    <div className="font-maisonNeue_light text-sm">Lorem ipsum odor amet, consectetuer adipiscing elit. Enim hendrerit conubia fringilla augue nec adipiscing hac. Condimentum fusce felis parturient turpis hendrerit proin leo ultrices pulvinar. Tempor vitae magnis porttitor erat lorem lectus ante a.  </div>
                  </div>
              </div>
              <div className="h-[60%] w-[22%]  mr-10">
                  <img className="w-full h-[85%]" src="/image6.jpg" alt="" />
                  <div className="m-5">
                    <div className="text-lg font-maisonNeue_medium mb-2">ENGINEERING</div>
                    <div className="font-maisonNeue_light text-sm">Lorem ipsum odor amet, consectetuer adipiscing elit. Velit tempor himenaeos ullamcorper netus quis venenatis curabitur tempor. Aliquet cursus quisque vehicula praesent vivamus massa sit maecenas dictum. Massa arcu ut fermentum imperdiet lacinia mattis nibh </div>
                  </div>
              </div>
              <div className="h-[60%] w-[22%] mr-10">
                <img className="w-full h-[85%]" src="/image7.jpg" alt="" />
                    <div className="m-5">
                      <div className="text-lg font-maisonNeue_medium mb-2">GROWTH</div>
                      <div className="font-maisonNeue_light text-sm">Lorem ipsum odor amet, consectetuer adipiscing elit. Ante pulvinar euismod egestas nulla; ridiculus rutrum fringilla natoque. Dapibus sagittis class sem ligula tempus nunc tortor. Ornare nulla lectus quam a ut eu volutpat.           </div>
                    </div>
              </div>
              <div className="h-[60%] w-[22%] ">
                <img className="w-full h-[85%]" src="/image8.jpg" alt="" />
                    <div className="m-5">
                      <div className="text-lg font-maisonNeue_medium mb-2">COLLABORATE</div>
                      <div className="font-maisonNeue_light text-sm">Lorem ipsum odor amet, consectetuer adipiscing elit. Ante pulvinar euismod egestas nulla; ridiculus rutrum fringilla natoque. Dapibus sagittis class sem ligula tempus nunc tortor. Ornare nulla lectus quam a ut eu volutpat. </div>
                    </div>
              </div>
        </div>

        <div className="Arrows w-[90%] mx-auto flex flex-row justify-end pt-5 ">
              <div className="group">
                <svg className="cursor-pointer transition duration-500 ease-in-out" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className="transition duration-500 ease-in-out fill-white group-hover:fill-black" d="M25 8C34.4 8 42 15.6 42 25C42 34.4 34.4 42 25 42C15.6 42 8 34.4 8 25C8 15.6 15.6 8 25 8ZM25 40C33.3 40 40 33.3 40 25C40 16.7 33.3 10 25 10C16.7 10 10 16.7 10 25C10 33.3 16.7 40 25 40Z" fill="white"/>
                <path className="transition duration-500 ease-in-out fill-white group-hover:fill-black" d="M25.2999 15.3002L26.7 16.7002L18.4 25.0002L26.7 33.3002L25.2999 34.7002L15.5999 25.0002L25.2999 15.3002Z" fill="white"/>
                <path className="transition duration-500 ease-in-out fill-white group-hover:fill-black" d="M34 26L17 26V24L34 24V26Z" fill="white"/>
                </svg>
              </div>

              <div className="group">
                <svg className="cursor-pointer transition duration-500 ease-in-out" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className="transition duration-500 ease-in-out fill-white group-hover:fill-black" d="M25 42C15.6 42 8 34.4 8 25C8 15.6 15.6 8 25 8C34.4 8 42 15.6 42 25C42 34.4 34.4 42 25 42ZM25 10C16.7 10 10 16.7 10 25C10 33.3 16.7 40 25 40C33.3 40 40 33.3 40 25C40 16.7 33.3 10 25 10Z" fill="white"/>
                <path className="transition duration-500 ease-in-out fill-white group-hover:fill-black" d="M24.7001 34.6998L23.3 33.2998L31.6 24.9998L23.3 16.6998L24.7001 15.2998L34.4001 24.9998L24.7001 34.6998Z" fill="white"/>
                <path className="transition duration-500 ease-in-out fill-white group-hover:fill-black" d="M16 24H33V26H16V24Z" fill="white"/>
                </svg>
              </div>
          </div>

       </div>
      </div>
    )
  }
  
  
  export default Carousel2
  