import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { isAdmin, isStudent } from "../utils";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import { useCoursesMutation } from "../slices/coursesApiSlice.js";
import { setCourses } from "../slices/coursesSlice.js";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

export default function Sidebar({ isOpen, setIsOpen, userInfo }) {
  const dispatch = useDispatch();
  const [courses, { isLoading }] = useCoursesMutation();

  const { allCourses } = useSelector((state) => state.courses);

  useEffect(() => {
    const fetchData = async () => {
      const res = await courses().unwrap();
      dispatch(setCourses(res));
    };
    fetchData().catch((err) =>
      toast.error(
        err?.data?.message || err.error || "Error status: " + err.status
      )
    );
  }, [allCourses]);

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
          {isStudent(userInfo) && (
            <NavLink
              to={`/dashboard/my-grades`}
              className={({ isActive }) =>
                isActive ? "font-bold text-primary" : ""
              }
            >
              <button className="text-left w-full px-4 py-2 tracking-wide transition-colors duration-200 transform rounded-md hover:bg-slate-200">
                Moje oceny
              </button>
            </NavLink>
          )}

          {!isStudent(userInfo) && (
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="transition-colors duration-200 transform rounded-md hover:bg-slate-200 flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    <span>Oceny</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-gray-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 relative flex flex-col space-y-1">
                    {allCourses.map((course, index) => (
                      <NavLink
                        to={`/dashboard/grades/${course.id}`}
                        key={index}
                        className={({ isActive }) =>
                          isActive ? "font-bold text-primary" : ""
                        }
                      >
                        <button className="text-left w-full tracking-wide px-4 py-2 transition-colors duration-200 transform rounded-md hover:bg-slate-200">
                          {course.name}
                        </button>
                      </NavLink>
                    ))}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          )}
          {isAdmin(userInfo) && (
            <NavLink
              to={`/dashboard/users`}
              className={({ isActive }) =>
                isActive ? "font-bold text-primary" : ""
              }
            >
              <button className="text-left w-full px-4 py-2 tracking-wide transition-colors duration-200 transform rounded-md hover:bg-slate-200">
                Użytkownicy
              </button>
            </NavLink>
          )}
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
