import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import { useRouter } from "next/dist/client/router";
import Image from "next/image";
import { useRef } from "react";
import Avatar from "./Avatar";
import { HeaderOptions } from "./HeaderOptions";

export const Header = () => {
  const router = useRouter();

  const searchInputRef = useRef<HTMLInputElement>(null);
  const search = (e: React.FormEvent) => {
    e.preventDefault();
    const term = searchInputRef?.current?.value;
    if (!term) return;
    router.push(`/search?term=${term}`);
  };
  return (
    <>
      <div className=" sticky top-0 bg-white dark:bg-[#202124]">
        <div className="flex w-full p-6 items-center ">
          <Image
            src="https://www.google.rw/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
            height={40}
            width={120}
            onClick={() => router.push("/")}
            className="cursor-pointer"
          />
          <form className=" flex flex-grow px-6 py-3 ml-10 mr-5 border-gray-200 dark:bg-[#303134] rounded-full shadow-lg max-w-3xl items-center">
            <input
              type="text"
              defaultValue={router.query.term}
              ref={searchInputRef}
              className=" flex-grow w-full focus:outline-none bg-transparent"
            />
            <XIcon
              className="h-7 sm:ml-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-50"
              onClick={() => (searchInputRef?.current?.value = "")}
            />
            <MicrophoneIcon className="mr-3 h-6 hidden sm:inline-flex text-blue-500 border-l pl-4 border-[#bdc1c6]" />
            <SearchIcon className="h-6 hidden sm:inline-flex text-blue-500" />
            <button hidden type="submit" className="" onClick={search}>
              Search
            </button>
          </form>
          <Avatar
            className="ml-auto"
            url="https://i.pinimg.com/280x280_RS/ab/a2/8e/aba28eb29f66aab5f24db128a0232f3f.jpg"
          />
        </div>

        <HeaderOptions />
      </div>
    </>
  );
};
