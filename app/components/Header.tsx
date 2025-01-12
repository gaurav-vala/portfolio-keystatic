"use client";

// import Link from "next/link";
import { Link } from "next-view-transitions";
import React, { useState, useEffect } from "react";

import { usePreventBodyScroll, useMediaQuery } from "react-haiku";

function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  const { isScrollLocked, toggleScrollLock } = usePreventBodyScroll();

  // Using useEffect to initialize the dark mode based on localStorage
  useEffect(() => {
    // Parse the string value from localStorage into a boolean
    const darkMode = JSON.parse(localStorage.getItem("dark-mode") || "false");
    setIsDarkMode(darkMode);
  }, []);

  // Toggle dark mode state and update localStorage
  const handleToggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
    document.documentElement.classList.toggle("dark");

    // Convert boolean to string ('true' or 'false') before saving to localStorage
    localStorage.setItem("dark-mode", JSON.stringify(!isDarkMode)); // Convert to string
  };

  const breakpoint = useMediaQuery("(max-width: 991px)", false);

  console.log(breakpoint);

  return (
    <div
      className={`flex items-center justify-between pb-6 overflow-hidden ${
        toggleMenu && "menu_active"
      }`}
    >
      <Link
        href={"/"}
        className={`font-serif pl-1  italic font-black ${
          toggleMenu ? "text-white text-2xl" : "text-black text-xl"
        } tracking-tight dark:text-neutral-50 relative z-[999] transition-all duration-500`}
      >
        gaurav
      </Link>
      <ul className="flex items-center gap-3 nav_link">
        {[
          { href: "/projects", label: "Projects" },
          { href: "/posts", label: "Blogs" },
          { href: "/notes", label: "Notes" },
          { href: "/experience", label: "Experience" },
          { href: "/uses", label: "Uses" },
          { href: "/about", label: "About" },
        ].map((item, index) => (
          <li
            key={item.href}
            className={`dark:text-white`}
            style={{
              transitionDelay: breakpoint ? `${index * 100}ms` : "0ms",
            }}
          >
            <Link
              className={`text-[16px] font-medium tracking-tighter transition-all duration-300 ${
                toggleMenu && breakpoint ? "opacity-100 translate-y-0" : ""
              }`}
              href={item.href}
              style={{
                transitionDelay: breakpoint ? `${index * 150}ms` : "0ms",
              }}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      <button
        className={`menu-toggle p-5 ${toggleMenu && "active"}`}
        onClick={() => {
          setToggleMenu((prev) => !prev);
          toggleScrollLock();
        }}
      >
        <div className="menu-bar" data-position="top"></div>
        <div className="menu-bar" data-position="bottom"></div>
      </button>
    </div>
  );
}

export default Header;
