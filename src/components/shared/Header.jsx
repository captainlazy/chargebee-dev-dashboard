import React from "react";
import { MagnifyingGlassIcon, BellIcon } from "@heroicons/react/24/solid";
import { Popover } from "@headlessui/react";
import { NOTIFICATION_DATA } from "../../lib/consts/notifications";
import { Notification } from "dev-ui-library-cb";

export const Header = () => {
  return (
    <div className="bg-white h-16 px-4 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <MagnifyingGlassIcon className="size-6" />
        <input
          type="text"
          placeholder="Search..."
          className="text-sm border-gray-300  focus:outline-none active:outline-none h-10 w-[24rem]"
        />
      </div>
      <div>
        <Popover className="relative">
          <Popover.Button>
            <BellIcon className="size-6" />
          </Popover.Button>
          <Popover.Panel className="absolute right-0 z-10">
            {NOTIFICATION_DATA.map((item) => (
              <Notification type={item.type} message={item.message} />
            ))}
          </Popover.Panel>
        </Popover>
      </div>
    </div>
  );
};
