import { Link } from "react-router-dom"
import ThemeToggle from "./ThemeToggle"
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Navbar() {
  const { theme } = useContext(ThemeContext);
  
  return (
    <Disclosure as="nav" className={`relative transition-all duration-300 ${
      theme === "light" 
        ? 'bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 shadow-lg border-b border-purple-500/20' 
        : 'bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 shadow-xl border-b border-gray-600/30'
    }`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Mobile menu button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-lg p-2 text-gray-300 hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500 transition-all duration-200 transform hover:scale-105">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden transition-transform duration-200" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block transition-transform duration-200" />
            </DisclosureButton>
          </div>

          {/* Logo and Navigation */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            {/* Logo */}
            <div className="flex shrink-0 items-center">
              <Link 
                to="/" 
                className="text-2xl font-bold text-white hover:text-amber-200 transition-all duration-300 transform hover:scale-105 tracking-wide"
              >
                Next<span className="text-amber-400 drop-shadow-lg">BUY</span>
                <span className="text-xs text-purple-300 ml-1">✨</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden sm:ml-8 sm:block">
              <div className="flex space-x-6">
                <Link 
                  to="/" 
                  className="group flex items-center px-4 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200 transform hover:scale-105"
                >
                  <i className="fa-solid fa-house mr-2 group-hover:text-amber-400 transition-colors duration-200"></i>
                  <span className="font-medium">Home</span>
                </Link>
                <Link 
                  to="/about" 
                  className="group flex items-center px-4 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200 transform hover:scale-105"
                >
                  <i className="fa-solid fa-info-circle mr-2 group-hover:text-blue-400 transition-colors duration-200"></i>
                  <span className="font-medium">About</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Right side items */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 space-x-4">
            {/* Cart */}
            <Link 
              to="/cart" 
              className="group relative p-3 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200 transform hover:scale-110"
            >
              <i className="fa-solid fa-cart-shopping text-lg group-hover:text-green-400 transition-colors duration-200"></i>
              {/* Cart badge (you can add cart count here) */}
              <span className="absolute -top-1 -right-1 h-5 w-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold shadow-lg">
                0
              </span>
            </Link>

            {/* Theme Toggle */}
            <div className="transform hover:scale-105 transition-transform duration-200">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      <DisclosurePanel className="sm:hidden transition-all duration-300 ease-in-out">
        <div className={`space-y-2 px-4 pt-4 pb-6 ${
          theme === "light" 
            ? 'bg-gradient-to-b from-purple-900/50 to-slate-900/50 backdrop-blur-sm border-t border-purple-500/20' 
            : 'bg-gradient-to-b from-gray-700/50 to-gray-800/50 backdrop-blur-sm border-t border-gray-600/20'
        }`}>
          <Link 
            to="/" 
            className="group flex items-center px-4 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200"
          >
            <i className="fa-solid fa-house mr-3 group-hover:text-amber-400 transition-colors duration-200"></i>
            <span className="font-medium">Home</span>
          </Link>
          <Link 
            to="/about" 
            className="group flex items-center px-4 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200"
          >
            <i className="fa-solid fa-info-circle mr-3 group-hover:text-blue-400 transition-colors duration-200"></i>
            <span className="font-medium">About</span>
          </Link>
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
