import Link from "next/link";
import React from "react";
import ThemeSwitch from "./ThemeSwitch";

const Nav = () => {
  return (
    <div>
      <div>
        <div>
          <Link href="/">Home</Link>
        </div>
        <div>
          <Link href="/about">About</Link>
        </div>
      </div>
      <ThemeSwitch />

      <style jsx>{`
        div {
          display: flex;
          padding: 5px;
          justify-content: space-between;
          align-items: center;
        }
        ul {
          display: flex;
          align-items: center;
          justify-content: end;
        }
        li {
          list-style: none;
          padding: 5px;
        }
      `}</style>
    </div>
  );
};

export default Nav;
