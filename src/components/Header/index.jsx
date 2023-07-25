import React from "react";
import { UserButton, currentUser } from "@clerk/nextjs";

const Header = async () => {
  const user = await currentUser();

  return (
    <div className="flex h-16 p-16 justify-between items-center w-full">
      <div className="logo">
        <h1 className="text-2xl font-bold">Test App Header</h1>
      </div>
      <div className="menu">
        <ul className="flex items-center">
          <li className="mr-4">
            <a href="#" className="text-blue-500 hover:text-blue-800">
              Home
            </a>
          </li>
          <li className="mr-4">
            <a href="#" className="text-blue-500 hover:text-blue-800">
              About
            </a>
          </li>
          <li className="mr-4">
            <a href="#" className="text-blue-500 hover:text-blue-800">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="auth flex">
        <div className="flex flex-col text-right mr-5">
          <p className="text-[14px] font-bold">{user.firstName + " " + user.lastName}</p>
          <p className="text-[12px]">{user.emailAddresses[0].emailAddress}</p>
        </div>
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default Header;
