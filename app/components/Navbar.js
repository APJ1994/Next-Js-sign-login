"use client";
import Link from "next/link";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
  return (
    <div>
      <ToastContainer />
      <header className="shadow-lg py-4 px-4 sm:px-10 bg-white font-[sans-serif] min-h-[70px] relative">
        <div className="flex flex-wrap items-center justify-between gap-5">
          <a
            href="/"
            className="lg:absolute max-lg:top-4 max-lg:left-10 max-sm:left-4 lg:top-2/4 lg:left-2/4 lg:-translate-x-1/2 lg:-translate-y-1/2"
          >
            <img
              src="https://readymadeui.com/readymadeui.svg"
              alt="logo"
              className="w-36"
            />
          </a>
          <div className="flex items-center ml-auto lg:order-1">
            <Link
              href="/login"
              className="mr-6 font-semibold text-[15px] border-none outline-none text-[#007bff] hover:underline"
            >
              Login
            </Link>
            <Link
              href={"/signup"}
              className="px-4 py-2 text-sm rounded-sm font-bold text-white border-2 border-[#007bff] bg-[#007bff] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#007bff]"
            >
              Sign up
            </Link>
            <button id="toggle" className="lg:hidden ml-7">
              <svg
                className="w-7 h-7"
                fill="#333"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <ul
            id="collapseMenu"
            className="lg:!flex lg:space-x-5 max-lg:space-y-2 max-lg:hidden max-lg:py-4 max-lg:w-full"
          >
            <li className="max-lg:border-b max-lg:bg-[#007bff] max-lg:py-2 px-3 max-lg:rounded">
              <a
                href="/"
                className="lg:hover:text-[#007bff] text-[#007bff] max-lg:text-white block font-semibold text-[15px]"
              >
                Home
              </a>
            </li>
            <li className="max-lg:border-b max-lg:py-2 px-3 max-lg:rounded">
              <a
                href="/"
                className="lg:hover:text-[#007bff] text-[#333] block font-semibold text-[15px]"
              >
                Team
              </a>
            </li>
            <li className="max-lg:border-b max-lg:py-2 px-3 max-lg:rounded">
              <a
                href="/"
                className="lg:hover:text-[#007bff] text-[#333] block font-semibold text-[15px]"
              >
                Feature
              </a>
            </li>
            <li className="max-lg:border-b max-lg:py-2 px-3 max-lg:rounded">
              <a
                href="/"
                className="lg:hover:text-[#007bff] text-[#333] block font-semibold text-[15px]"
              >
                Blog
              </a>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
