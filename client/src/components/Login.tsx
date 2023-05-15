import React from "react";

function Login(props) {
  return (
    <div className="relative flex flex-col items-center h-screen overflow-hidden mx-2">
      <img src="logo.png" alt="Logo" className="my-7 w-3/4 sm:w-1/2"/>
      <div className="w-full md:w-3/4 p-6 bg-white rounded-md shadow-md">
        <h1 className="text-3xl font-semibold text-center text-primary">
          Logowanie
        </h1>
        <form className="mt-6">
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Email
            </label>
            <input
              type="email"
              className="block w-full px-4 py-2 mt-2 border rounded-md focus:border-purple-400 focus:ring-primary focus:outline-none focus:ring-2"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Hasło
            </label>
            <input
              type="password"
              className="block w-full px-4 py-2 mt-2 border rounded-md focus:border-purple-400 focus:ring-primary focus:outline-none focus:ring-2"
            />
          </div>
          <div className="mt-6">
            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-primary rounded-md hover:bg-primary-dark">
              Zaloguj
            </button>
          </div>
        </form>

        <p className="mt-8 text-xs font-light text-center text-gray-700">
          Masz problem z logowaniem? <br /> Napisz na
          <span className='text-primary-dark'> support@dziennikus-maksimus.pl</span>
        </p>
      </div>
    </div>
  );
}

export default Login;
