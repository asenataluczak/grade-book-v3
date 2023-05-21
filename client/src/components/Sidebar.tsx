import React from "react";

export default function Sidebar({ isOpen, setIsOpen }) {
  return (
    <main
      className={
        "fixed top-20 left-0 z-10 flex flex-col flex-shrink-0 w-64 h-full font-normal duration-75 lg:translate-x-0 transition-width " +
        (isOpen ? "translate-x-0" : "-translate-x-56")
      }
    >
      <section
        className={
          "w-56 left-0 top-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform border-r border-slite-50"
        }
      >
        <article className="relative w-full max-w-lg pb-10 p-2 flex flex-col space-y-2 h-full">
          <button className="text-left w-full px-4 py-2 tracking-wide transition-colors duration-200 transform rounded-md hover:bg-slate-200">
            Moje oceny
          </button>
          <button className="text-left w-full px-4 py-2 tracking-wide transition-colors duration-200 transform rounded-md hover:bg-slate-200">
            Oceny
          </button>
          <button className="text-left w-full px-4 py-2 tracking-wide transition-colors duration-200 transform rounded-md hover:bg-slate-200">
            Użytkownicy
          </button>
        </article>
      </section>

      {isOpen && (
        <section
          className="w-screen h-screen cursor-pointer bg-gray-900 bg-opacity-25"
          onClick={() => {
            setIsOpen(false);
          }}
        ></section>
      )}
    </main>
  );
}
