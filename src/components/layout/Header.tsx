import React from 'react';
import { Accessibility, Menu, X } from 'lucide-react';
import { useToggle } from '../../hooks/useToggle';

export function Header() {
  const [isMenuOpen, toggleMenu] = useToggle(false);

  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Accessibility className="h-8 w-8 text-blue-600" aria-hidden="true" />
            <div className="ml-3">
              <h1 className="text-xl font-bold text-gray-900 sm:text-2xl">
                Accessibility Audit Tool
              </h1>
              <p className="text-sm text-gray-600 hidden sm:block">
                For Government Websites & Apps
              </p>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="sm:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            onClick={() => toggleMenu()}
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">{isMenuOpen ? 'Close menu' : 'Open menu'}</span>
            {isMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>

          {/* Desktop menu */}
          <div className="hidden sm:flex sm:items-center sm:space-x-8">

            <a
              href="#documentation"
              className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              Documentation
            </a>

          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="sm:hidden" id="mobile-menu">
            <div className="pt-2 pb-3 space-y-1">

              <a
                href="#documentation"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >
                Documentation
              </a>

            </div>
          </div>
        )}
      </nav>
    </header>
  );
}