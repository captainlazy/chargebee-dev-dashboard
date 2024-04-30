import React from "react";
import {
  DASHBOARD_SIDERBAR_LINKS,
  DASHBOARD_SIDERBAR_BOTTOM_LINKS,
} from "../../lib/consts/navigation";
import { Link } from "react-router-dom";

const linkClasses =
  "flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base";

const SidebarLink = ({ item }) => {
  return (
    <Link to={item.path} className={`${linkClasses} `}>
      <span className="text-l flex gap-2 text-white">
        {item.icon} {item.label}
      </span>
    </Link>
  );
};

export const Sidebar = () => {
  return (
    <div className="flex flex-col w-60 bg-blue-950 p-3 ">
      <div className="items-center flex px-1 py-3">
        <img
          src="https://webstatic.chargebee.com/assets/web/648/images/press/brand-guidelines/brand-guidelines-logo3.svg"
          alt=""
        />
      </div>
      <div className="flex-1 py-8 flex flex-col gap-0.5">
        {DASHBOARD_SIDERBAR_LINKS.map((item) => (
          <SidebarLink key={item.key} item={item} />
        ))}
      </div>
      <div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-700">
        {DASHBOARD_SIDERBAR_BOTTOM_LINKS.map((item) => (
          <SidebarLink key={item.key} item={item} />
        ))}
      </div>
    </div>
  );
};
