import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

function GradeDetailsDialog({ isOpen, closeModal, grade }) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-md bg-white p-6 text-left align-middle shadow-md transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-xl font-medium leading-6 text-gray-900"
                >
                  Szczegóły oceny
                </Dialog.Title>
                <div className="flex gap-2 mt-4">
                  <div className="mb-6">
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-800"
                    >
                      Opis
                    </label>
                    <input
                      type="email"
                      className="block w-full px-4 py-2 mt-2 border rounded-md outline-none"
                      readOnly
                      value={grade.description}
                    />
                  </div>
                  <div className="w-20">
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-800"
                    >
                      Wartość
                    </label>
                    <input
                      type="email"
                      className="block w-full px-4 py-2 mt-2 border rounded-md outline-none"
                      readOnly
                      value={grade.value}
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-800"
                    >
                      Wystawiona przez
                    </label>
                    <input
                      type="email"
                      className="block w-full px-4 py-2 mt-2 border rounded-md outline-none"
                      readOnly
                      value={grade.authorName}
                    />
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    type="button"
                    className="inline-flex justify-end rounded-md border border-transparent bg-blue-100 ml-auto px-4 py-2 text-sm font-medium text-primary hover:bg-slate-200 focus:outline-none"
                    onClick={closeModal}
                  >
                    Zamknij
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export default GradeDetailsDialog;
