import { HeaderOption } from "./HeaderOption";

import {
  DotsVerticalIcon,
  SearchIcon,
  PhotographIcon,
  PlayIcon,
  NewspaperIcon,
  MapIcon,
} from "@heroicons/react/outline";

export const HeaderOptions = () => {
  return (
    <div className="flex w-full  justify-evenly text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-52 border-b-[1px] border-[#bdc1c6] ">
      <div className="flex space-x-6">
        <HeaderOption Icon={SearchIcon} title="all" selected />
        <HeaderOption Icon={PhotographIcon} title="Images" />
        <HeaderOption Icon={PlayIcon} title="Videos" />
        <HeaderOption Icon={NewspaperIcon} title="News" />
        <HeaderOption Icon={MapIcon} title="Maps" />
        <HeaderOption Icon={DotsVerticalIcon} title="More" />
      </div>
      <div className="flex space-x-4">
        <p className="link">Settings</p>
        <p className="link">Tools</p>
      </div>
    </div>
  );
};
