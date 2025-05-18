// src/components/HeaderList.jsx
import React from "react";
import { NavLink } from "react-router-dom";

const HeaderList = ({ name, Icon, route }) => {
  return (
    <NavLink
      to={route}
      className={({ isActive }) =>
        `text-white flex items-center gap-3 text-[15px] font-semibold cursor-pointer hover:underline underline-offset-8 mb-2 ${
          isActive ? "underline text-yellow-400" : ""
        }`
      }
    >
      <Icon />
      {name && <h2>{name}</h2>}
    </NavLink>
  );
};

export default HeaderList;
