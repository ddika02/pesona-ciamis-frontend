import React from "react";
import { NavLink } from "react-router-dom";
import {
  MdDashboard,
  MdLocationOn,
  MdFeedback,
  MdLogout,
} from "react-icons/md";

const Sidebar = () => {
  const menuItems = [
    {
      name: "Dashboard",
      icon: <MdDashboard size={20} />,
      path: "/dashboard",
      end: true,
    },
    {
      name: "Destinasi",
      icon: <MdLocationOn size={20} />,
      path: "/dashboard/destinasi",
    },
    {
      name: "Kritik & Saran",
      icon: <MdFeedback size={20} />,
      path: "/dashboard/kritik-saran",
    },
  ];

  const getLinkStyle = ({ isActive }) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "10px 15px",
    color: isActive ? "#40E0D0" : "#000000",
    textDecoration: "none",
    borderBottom: isActive ? "2px solid #40E0D0" : "none",
    backgroundColor: "transparent",
    fontWeight: isActive ? "bold" : "normal",
  });

  return (
    <div
      className="bg-white border-end vh-100 p-3 d-flex flex-column justify-content-between"
      style={{ width: "250px" }}
    >
      <div>
        <div className="mb-4 text-center fw-bold fs-4">Admin</div>
        <ul className="nav flex-column">
          {menuItems.map((item, index) => (
            <li className="nav-item" key={index}>
              <NavLink
                to={item.path}
                end={item.end || false}
                style={getLinkStyle}
              >
                {item.icon}
                <span>{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto">
        <NavLink to="/" style={getLinkStyle}>
          <MdLogout size={20} />
          <span>Logout</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
