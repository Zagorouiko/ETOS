

function CTA1() {


    return (
      <div className="bg-[#252525] h-full w-full">
        <div className="w-full flex flex-row">

          <div className=" w-1/2 h-[80vh] flex justify-center items-center">
            <img className="bg-slate-800 w-full h-full"  src="/image1.jpg" alt="" />
          </div>

          <div className=" w-1/2 h-[80vh] flex flex-col items-center justify-center px-48 text-white">
            <div className="w-full ml-0">
              <div className="text-2xl font-maisonNeue_medium mb-10">HIRE</div>
            </div>
              <div className="text-6xl font-maisonNeue_bold mb-7">Lorem ipsum odor amet, consectetuer adipiscing elit.</div>
              <div style={{height: '40px'}} className="flex justify-center items-center mt-10 w-[300px] height-[40px] text-center rounded-full border border-white hover:bg-gray-100 hover:text-[#252525] cursor-pointer transition duration-500 ease-in-out">
                <div className="">Book Us</div>
              </div>
          </div>
        </div>
      </div>
    )
  }
  
  
  export default CTA1
  