import Image from "next/image";
import React from "react";

const WebStack = () => {
  return (
    <div className="flex mx-auto items-center justify-center h-screen">
      <Image
        src="/test.svg"
        width={800}
        height={800}
        alt="basic-stack"
        className="mb-16"
      />
    </div>
  );
};

export default WebStack;
