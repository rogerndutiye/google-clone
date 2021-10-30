import React from "react";

interface RProps {
  url: string;
  className?: string;
}

export default function Avatar({ url, className }: RProps) {
  return (
    <img
      loading="lazy"
      className={`h-10 rounded-full cursor-pointer transition duration-150 transform hover:scale-110" ${className}`}
      src={url}
      alt="Profile picture"
    />
  );
}
