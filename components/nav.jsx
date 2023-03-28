import React from "react";
import { FaBars } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { RiComputerLine, RiFontSize } from "react-icons/ri";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import Image from "next/image";
import logo from '../public/images/logo.png'


function Navigation() {
  const [isShowing, setIsShowing] = useState(true);

  return (
    <div>
      <div className="bg-white flex justify-center md:hidden">
        <div className="flex justify-between h-22 text-black max-w-7xl w-full ml-10 mr-10">
          <div className="p-3 text-xl hover:text-[#333333] flex">
            <a href="/">
            <Image src="/images/logo.png" width="65" height="65" className="shadow-md"/>
            </a>
          </div>

          <div className="p-2 pr-3 flex gap-4">
            <div>
              <Menu>
                <div>
                  <Menu.Button>
                    <IoMdContact
                      className="w-12 h-12 mt-2 text-gray-400 hover:text-[#84A7BA] hover:scale-105"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                
                  <Menu.Items className="absolute center mt-2 divide-y origin-top-right divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active ? "bg-[#333333] text-white" : "text-gray-900"
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          Contact
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active ? "bg-[#333333] text-white" : "text-gray-900"
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          Bio
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active ? "bg-[#333333] text-white" : "text-gray-900"
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          Upwork
                        </button>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>

            <div>
              <Menu>
                <div>
                  <Menu.Button>
                    <FaBars className="w-12 h-12 mt-2 text-gray-400 hover:text-[#84A7BA] hover:scale-105" />
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 mr-12 center mt-2 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    {/* right-0 used to keep items onto page. On wider screens items align to right side of screen instead */}
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active ? "bg-[#333333] text-white" : "text-gray-900"
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          Contact
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active ? "bg-[#333333] text-white" : "text-gray-900"
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          Bio
                        </button>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:block">
        <div className="flex justify-center">
          <div className=" flex justify-between max-w-7xl w-full ml-10 mr-10">
            <div className="flex">
              <div className="p-3 text-xl hover:text-[#333333] flex">
                <a href="/">
                  
                 <Image src="/images/logo.png" width="65" height="65"/>
                </a>
                <a href="/" className="ml-2 text-2xl -mt-1">
                </a>
              </div>
            </div>
            
              <div className="flex gap-20 mr-4 mt-10">
                <a href="https://www.upwork.com/freelancers/~0156f06c2a59208aaa" class="nav">Upwork</a>
                <a href="https://www.linkedin.com/in/desantisd15/"  class="nav">LinkedIn</a>
                <a href="/bio" class="nav">Bio</a>
                <a href="/contact" class="nav">Contact</a>
                
              </div>
              
          </div>
        </div>
      </div>
      
    </div>
  );
}


// create seperate divs for page layout for mobile and desktop. Hidden for small and block and other is block and small hidden
// shortcut alt shift f for code formatter
// blue color #84A7BA 
export default Navigation;

