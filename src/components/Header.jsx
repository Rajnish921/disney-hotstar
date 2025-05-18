// src/components/Header.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./../assets/Images/logo.png";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderList from "./HeaderList";

function Header() {
  const [toggle, setToggle] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const menu = [
    {
      name: "HOME",
      icon: HiHome,
      route: "/",
    },
    {
      name: "SEARCH",
      icon: HiMagnifyingGlass,
      route: "/search",
    },
    {
      name: "WATCH LIST",
      icon: HiPlus,
      route: "/watchlist",
    },
    {
      name: "ORIGINALS",
      icon: HiStar,
      route: "/originals",
    },
    {
      name: "MOVIES",
      icon: HiPlayCircle,
      route: "/movies",
    },
    {
      name: "SERIES",
      icon: HiTv,
      route: "/series",
    },
  ];

  return (
    <div className="flex items-center justify-between p-5 bg-[#1a1d29]">
      <div className="flex gap-8 items-center">
        <img
          src={logo}
          className="w-[80px] md:w-[115px] object-cover"
          alt="Disney+ Logo"
        />
        <div className="hidden md:flex gap-8">
          {menu.map((item) => (
            <HeaderList
              key={item.name}
              name={item.name}
              Icon={item.icon}
              route={item.route}
            />
          ))}
        </div>
        <div className="flex md:hidden gap-5">
          {menu.map(
            (item, index) =>
              index < 3 && (
                <HeaderList
                  key={item.name}
                  name={""}
                  Icon={item.icon}
                  route={item.route}
                />
              )
          )}
          <div className="md:hidden" onClick={() => setToggle(!toggle)}>
            <HeaderList name={""} Icon={HiDotsVertical} route="#" />
            {toggle ? (
              <div className="absolute mt-3 bg-[#121212] border-[1px] border-gray-700 p-3 px-5 py-4">
                {menu.map(
                  (item, index) =>
                    index > 2 && (
                      <HeaderList
                        key={item.name}
                        name={item.name}
                        Icon={item.icon}
                        route={item.route}
                      />
                    )
                )}
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <div className="relative">
        <img
          src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
          className="w-[40px] rounded-full cursor-pointer"
          alt="Profile"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        />
        {isDropdownOpen && (
          <div className="absolute top-[50px] right-0 bg-[#2a2d3a] rounded-md shadow-lg w-32">
            <Link
              to="/login"
              className="block px-4 py-2 text-white hover:bg-[#3a3d4a] text-center"
              onClick={() => setIsDropdownOpen(false)}
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="block px-4 py-2 text-white hover:bg-[#3a3d4a] text-center"
              onClick={() => setIsDropdownOpen(false)}
            >
              Signup
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
