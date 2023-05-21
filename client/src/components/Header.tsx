import React from "react";
import { Bars3Icon, UserIcon, XMarkIcon } from "@heroicons/react/20/solid";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

export default function Header({ isOpen, setIsOpen, userInfo, logout }) {
  return (
    <header className="flex z-20 p-4 bg-white h-20 fixed w-screen border-b border-slite-50 gap-2">
      <button
        className="p-2 mr-2 text-gray-600 rounded-full cursor-pointer lg:hidden hover:text-gray-900 hover:bg-gray-100 self-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <XMarkIcon className="h-6 w-6" />
        ) : (
          <Bars3Icon className="h-6 w-6" />
        )}
      </button>
      <img src="logo.png" alt="Logo" />
      <h1 className="text-3xl font-semibold md:flex hidden self-center">
        <span className="text-primary">Dziennikus</span>
        <span className="text-accent">Maksimus</span>
      </h1>

      <Menu
        as="div"
        className="self-center relative inline-block text-left ml-auto"
      >
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-full bg-white px-2 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-primary hover:bg-gray-50">
          <UserIcon className="h-5 w-5 text-primary" aria-hidden="true" />
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 p-2 z-50 mt-2 w-56 origin-top-right bg-white rounded-md divide-y divide-gray-300 shadow-lg ring-1 ring-gray-300 focus:outline-none">
            <div className="p-2 text-primary font-semibold">
              <div>{userInfo ? userInfo.fullname : "John Doe"}</div>
              <div>{userInfo ? userInfo.role : "Admin"}</div>
            </div>
            <div className="py-2 space-y-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    type="submit"
                    className={
                      (active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block w-full py-2 text-left w-full px-4 tracking-wide transition-colors duration-200 transform rounded-md hover:bg-slate-200")
                    }
                    onClick={() => logout()}
                  >
                    Wyloguj
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </header>
  );
}
