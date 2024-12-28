import React from "react";

import "../styles.css";
import Blogs from "../../components/Blogs";

const page = () => {
  return (
    <>
      <section className="mb-5">
        <h2 className="text-3xl italic font-black text-red-500">My Blogs</h2>
        <p className="mt-2 text-sm font-medium leading-snug tracking-tight text-black dark:text-neutral-300">
          I write blogs time to time, just for my own reference which helps when
          I want to look for something. I write and post them on Hashnode and
          DEV.to.
        </p>
      </section>
      <Blogs count={50} />
    </>
  );
};

export default page;
