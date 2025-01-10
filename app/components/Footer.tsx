import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center w-full gap-1 py-5 mt-8 border-t border-neutral-300">
      <p className="w-full pt-2 text-sm tracking-tighter text-center lowercase">
        Made by <span className="font-serif italic font-black"> me</span> 😁
      </p>
      <p className="text-[12px] font-medium tracking-tighter uppercase text-neutral-700 text-center">
        The site is using NextJS, Keystatic, Hashnode and TailwindCSS{" "}
      </p>
    </footer>
  );
};

export default Footer;
