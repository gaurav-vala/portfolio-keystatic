"use client";

// import Link from "next/link";
import { Link } from "next-view-transitions";
import React, { useState, useEffect } from "react";

function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);

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

  return (
    <div className="flex items-center justify-between pb-6">
      <Link
        href={"/"}
        className="font-serif text-xl italic font-black tracking-tight dark:text-neutral-50"
      >
        gaurav
      </Link>

      <ul className="flex items-center gap-3">
        {[
          { href: "/", label: "Home" },
          { href: "/projects", label: "Projects" },
          { href: "/posts", label: "Blogs" },
          { href: "/notes", label: "Notes" },
          { href: "/about", label: "About" },
        ].map((item) => (
          <li key={item.href} className="dark:text-white">
            <Link
              className="text-[16px] font-medium tracking-tighter"
              href={item.href}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Header;
