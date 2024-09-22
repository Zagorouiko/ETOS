

function About() {


    return (
      <div className="about bg-[#EDF2F4] h-5/6 w-full">
        <div className="w-full flex flex-row">
          <div className="w-[10%]" />
          <div className=" w-[40%] h-[80vh] flex justify-center items-center">
            <img className="bg-slate-800 w-[80%] h-[90%]"  src="/image3.jpg" alt="" />
          </div>
          <div className=" w-1/2 h-[80vh] flex flex-col items-center justify-center px-32">
            <div className="text-6xl font-maisonNeue_bold mb-20">ETOS solves the problems of tomorrow</div>
            <div className="text-3xl font-maisonNeue_medium mb-7">We build transformative digital experiences for the world's leading brands by blending AI, design, and technology.</div>
            <div className="w-full ml-0">
              <div style={{height: '40px'}} className="flex justify-center items-center mt-10 w-[200px] height-[40px] text-center rounded-full border border-black hover:text-gray-300 hover:bg-[#252525] cursor-pointer transition duration-500 ease-in-out">
                <div className="">Book Us</div>
              </div>
            </div>       
          </div>
        </div>
      </div>
    )
  }
  
  
  export default About
  