import Image from "next/image";
import React,{useState} from "react";

function Card() {


    const [show, setShow]=useState(false)

  return (
    <div>
    <div className="flex justify-center mt-4" id="first line of icons">
      <div className="max-w-7xl flex gap-8 flex-wrap">

        
         <div className="text-center h-52 w-52 drop-shadow-lg bg-gradient-to-r from-gray-300 to-gray-400 rounded-md shadow-md hover:border hover:border-[#84A7BA] hover:scale-110 hover:transition-all ease-in-out duration-300">
          <img
            src={"/images/nextjs-logo.png"}
            z='2'
            className="h-24 w-36 mt-14 ml-8 "
          />
          <div className="opacity-0 hover:opacity-80 absolute h-52 w-52 -mt-[152px] bg-gray-700 rounded-md text-white align-center">
         <br/>
         <br/>
         <br/>
         <br/>
          Next.js Framework
          </div>
        </div>

        <div className=" text-center h-52 w-52 drop-shadow-lg bg-gray-400 rounded-md shadow-md hover:border hover:border-[#84A7BA] hover:scale-110 hover:transition-all ease-in-out duration-300">
        <img
            src={"/images/React-icon.svg.png"}
            className="h-28 w-32 mt-11 ml-9"
          />
          <div className="opacity-0 hover:opacity-80 absolute h-52 w-52 -mt-[158px] bg-gray-700 rounded-md text-white align-center">
         <br/>
         <br/>
         <br/>
         <br/>
          React Library
          </div>
        </div>

       <div className="text-center h-52 w-52 drop-shadow-lg bg-gradient-to-r from-gray-400 to-gray-300 rounded-md shadow-md hover:border hover:border-[#84A7BA] hover:scale-110 hover:transition-all ease-in-out duration-300">
          <img
            src={"/images/javascript-logo.png"}
            className="h-32 w-52 mt-10 "
          />
          <div className="opacity-0 hover:opacity-80 absolute h-52 w-52 -mt-[170px] bg-gray-700 rounded-md text-white align-center">
         <br/>
         <br/>
         <br/>
         <br/>
          JavaScript
          </div>
        </div>
      </div>
    </div>

    <div className="flex justify-center  mt-4 mb-2 " id="second line of icons">
      <div className="max-w-7xl flex gap-8 flex-wrap">

        <div className="text-center h-52 w-52 drop-shadow-lg bg-gradient-to-r from-gray-300 to-gray-400 rounded-md shadow-md hover:border hover:border-[#84A7BA] hover:scale-110 hover:transition-all ease-in-out duration-300">
                <img
                    src={"/images/HTMLg.png"}
                    z='2'
                    className="h-32 w-32 mt-10 ml-9 "
                />
                <div className="opacity-0 hover:opacity-80 absolute h-52 w-52 -mt-[170px] bg-gray-700 rounded-md text-white align-center">
                <br/>
                <br/>
                <br/>
                <br/>
                HTML
                </div>
                </div>

        <div className="text-center h-52 w-52 drop-shadow-lg bg-gray-400 rounded-md shadow-md hover:border hover:border-[#84A7BA] hover:scale-110 hover:transition-all ease-in-out duration-300">
            <img
                src={"/images/css3-logo.png"}
                className=" h-40 w-40 mt-5 ml-6 "
            />
            <div className="opacity-0 hover:opacity-80 absolute h-52 w-52 -mt-[181px] bg-gray-700 rounded-md text-white align-center">
                <br/>
                <br/>
                <br/>
                <br/>
                CSS
                </div>
            </div>

        <div className="text-center h-52 w-52 drop-shadow-lg bg-gradient-to-r from-gray-400 to-gray-300 rounded-md shadow-md hover:border hover:border-[#84A7BA] hover:scale-110 hover:transition-all ease-in-out duration-300">
          <img
            src={"/images/tailwind.png"}
            z='2'
            className="h-40 w-40 mt-5 ml-6"
          />
            <div className="opacity-0 hover:opacity-80 absolute h-52 w-52 -mt-[181px] bg-gray-700 rounded-md text-white align-center">
                <br/>
                <br/>
                <br/>
                <br/>
                Tailwind Framework
                </div>
            
          </div>
        
        
      </div>
    </div>
    <div className='flex flex-auto justify-center text-gray-500'>
        <button onClick={()=>setShow(!show)} className="hover:text-[#84A7BA]">
            {show? 'Hide Elements ⌄' : 'Hide Elements ^' }
            </button>
    </div>

    { show?
    <div className="flex justify-center mt-4 mb-2 " id="third line of icons">
      <div className="max-w-7xl flex gap-8 flex-wrap">

        <div className="text-center h-52 w-52 drop-shadow-lg bg-gradient-to-r from-gray-300 to-gray-400 rounded-md shadow-md hover:border hover:border-[#84A7BA] hover:scale-110 hover:transition-all ease-in-out duration-300">
          <img
            src={"/images/Csharp_logo.png"}
            className=" h-40 w-40 mt-5 ml-6 "
          />
          <div className="opacity-0 hover:opacity-80 absolute h-52 w-52 -mt-[181px] bg-gray-700 rounded-md text-white align-center">
                <br/>
                <br/>
                <br/>
                <br/>
                C-Sharp
                </div>
        </div>

        <div className="text-center h-52 w-52 drop-shadow-lg bg-gray-400 rounded-md shadow-md hover:border hover:border-[#84A7BA] hover:scale-110 hover:transition-all ease-in-out duration-300">
        <img
            src={"/images/java.png"}
            className=" h-32 w-32 mt-10 ml-9 "
          />
          <div className="opacity-0 hover:opacity-80 absolute h-52 w-52 -mt-[169px] bg-gray-700 rounded-md text-white align-center">
                <br/>
                <br/>
                <br/>
                <br/>
                Java
                </div>
        </div>
        
        <div className="text-center h-52 w-52 drop-shadow-lg bg-gradient-to-r from-gray-400 to-gray-300 rounded-md shadow-md hover:border hover:border-[#84A7BA] hover:scale-110 hover:transition-all ease-in-out duration-300">
          <img
            src={"/images/NET_CORE_LOGO.svg.png"}
            className="h-28 w-28 mt-11 ml-11"
          />
          <div className="opacity-0 hover:opacity-80 absolute h-52 w-52 -mt-[157px] bg-gray-700 rounded-md text-white align-center">
                <br/>
                <br/>
                <br/>
                <br/>
                .NET Framework 
                </div>
        </div>

        
      </div>
    </div>
    :null }

    { show?
    <div className="flex justify-center mt-4 mb-2 " id="fourth line of icons">
      <div className="max-w-7xl flex gap-8 flex-wrap">
        
        <div className="text-center h-52 w-52 drop-shadow-lg bg-gradient-to-r from-gray-300 to-gray-400 rounded-md shadow-md hover:border hover:border-[#84A7BA] hover:scale-110 hover:transition-all ease-in-out duration-300">
          <img
            src={"/images/sql.png"}
            z='2'
            className="h-24 w-36 mt-14 ml-8"
          />
          <div className="opacity-0 hover:opacity-80 absolute h-52 w-52 -mt-[153px] bg-gray-700 rounded-md text-white align-center">
                <br/>
                <br/>
                <br/>
                <br/>
                Structured Query Language
                </div>
        </div>
        <div className="text-center h-52 w-52 drop-shadow-lg bg-gray-400 rounded-md shadow-md hover:border hover:border-[#84A7BA] hover:scale-110 hover:transition-all ease-in-out duration-300">
          <img
            src={"/images/swift.png"}
            className="h-28 w-28 mt-11 ml-11"
          />
          <div className="opacity-0 hover:opacity-80 absolute h-52 w-52 -mt-[158px] bg-gray-700 rounded-md text-white align-center">
                <br/>
                <br/>
                <br/>
                <br/>
                Swift
                </div>
        </div>
        <div className="text-center h-52 w-52 drop-shadow-lg bg-gradient-to-r from-gray-400 to-gray-300 rounded-md shadow-md hover:border hover:border-[#84A7BA] hover:scale-110 hover:transition-all ease-in-out duration-300">
          <img
            src={"/images/asp.png"}
            className="h-36 w-36 mt-7 ml-7"
          />
          <div className="opacity-0 hover:opacity-80 absolute h-52 w-52 -mt-[173px] bg-gray-700 rounded-md text-white align-center">
                <br/>
                <br/>
                <br/>
                <br/>
               ASP.NET Framework
                </div>
        </div>
      </div>
    </div>
    :null }

    {show? 
    <div className="flex justify-center mt-4 mb-2 " id="fifth line of icons">
      <div className="max-w-7xl flex gap-8 flex-wrap">
        
        <div className="text-center h-52 w-52 drop-shadow-lg bg-gray-400 rounded-md shadow-md hover:border hover:border-[#84A7BA] hover:scale-110 hover:transition-all ease-in-out duration-300">
          <img
            src={"/images/Kotlin.png"}
            z='2'
            className="h-36 w-36 mt-8 ml-8"
          />
          <div className="opacity-0 hover:opacity-80 absolute h-52 w-52 -mt-[177px] bg-gray-700 rounded-md text-white align-center">
                <br/>
                <br/>
                <br/>
                <br/>
               Kotlin
                </div>
        </div>
        
      </div>
    </div>
    :null }


    </div>
  );
}

export default Card;
