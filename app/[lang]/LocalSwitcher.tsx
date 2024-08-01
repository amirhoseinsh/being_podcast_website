"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { i18n, type Locale } from "../../i18n-config";
import { US, IR /* Add other country flags as needed */ } from 'country-flag-icons/react/3x2';

// Import the necessary flag components


export default function LocaleSwitcher() {
  const pathName = usePathname();
  const currentLocale = pathName?.split("/")[1] || i18n.defaultLocale;

  const redirectedPathName = (locale: Locale) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  // State to manage dropdown visibility
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  // Define country flags for each locale
  const countryFlags: Record<Locale, JSX.Element> = {
    en: <US title="United States" className="flag-icon" />,
    fa: <IR title="Iran" className="flag-icon" />,
    // Add other country codes and corresponding flags
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const localeOptions = i18n.locales.map((locale) => (
    <div
      key={locale}
      className={`flex items-center gap-2 cursor-pointer ${
        currentLocale === locale ? 'font-semibold' : ''
      }`}
      onClick={() => {
        window.location.href = redirectedPathName(locale);
      }}
    >
      {countryFlags[locale]} {/* Display the flag icon */}
      <span>{locale.toUpperCase()}</span> {/* Display the locale code */}
    </div>
  ));

  return (
    <div className="relative">
      {/* <label htmlFor="localeSelect" className="text-sm duration-500 text-zinc-500">
        Language:
      </label> */}
      <div className="relative inline-block">
        <div
          className={`bg-white border rounded-md shadow-md w-16 absolute z-10 ${
            isDropdownOpen ? 'block' : 'hidden'
          }`}
        >
          {localeOptions}
        </div>
        <div
          className="bg-gray-100 border rounded-md p-1 w-16 cursor-pointer"
          onClick={toggleDropdown}
        >
          <div className="flex items-center gap-2">
            {countryFlags[currentLocale]}
            <span>{currentLocale.toUpperCase()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}