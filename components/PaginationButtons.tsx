/* eslint-disable @next/next/link-passhref */
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import Link from "next/link";

export const PaginationButtons = () => {
  const router = useRouter();
  const startIndex = Number(router.query.start) || 0;
  return (
    <div className="flex justify-between max-w-lg text-blue-700 mb-10 ">
      {startIndex >= 10 && (
        // eslint-disable-next-line @next/next/link-passhref
        <Link
          href={`/search?term=${router.query.term}&start=${startIndex - 10}`}
        >
          <div className="flex flex-grow flex-col items-center cursor-pointer hover:underline">
            <ChevronLeftIcon className="h-5" />
            <p>previous</p>
          </div>
        </Link>
      )}

      <Link href={`/search?term=${router.query.term}&start=${startIndex + 10}`}>
        <div className="flex flex-grow flex-col items-center cursor-pointer hover:underline">
          <ChevronRightIcon className="h-5" />
          <p>Next</p>
        </div>
      </Link>
    </div>
  );
};
