"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

import { Card, CardContent } from "@/src/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/src/components/ui/carousel";
import Link from "next/link";

const Images = [
  {
    id: 1,
    path: "https://ik.imagekit.io/mxdeley/header_1.png?updatedAt=1706442158195",
  },
  {
    id: 2,
    path: "https://ik.imagekit.io/mxdeley/header_2.png?updatedAt=1706442145966",
  },
  {
    id: 3,
    path: "https://ik.imagekit.io/mxdeley/header_3.png?updatedAt=1706442122515",
  },
  {
    id: 4,
    path: "https://ik.imagekit.io/mxdeley/header_4.png?updatedAt=1706442169273",
  },
  {
    id: 5,
    path: "https://ik.imagekit.io/mxdeley/header_5.png?updatedAt=1706442133896",
  },
];

export function HomepageCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <>
      <div className="space-y-2 font-light text-sm text-zinc-700  mb-5">
        <h2 className="max-w-3xl text-center">
          I&apos;m mxdeley, a multi disciplined engineer with expertise in both
          the{" "}
          <Link
            href="https://en.wikipedia.org/wiki/Technology"
            className="font-bold text-zinc-950"
          >
            tech
          </Link>{" "}
          and{" "}
          <Link
            href="https://en.wikipedia.org/wiki/construction"
            className="font-bold text-zinc-950"
          >
            construction
          </Link>{" "}
          industries.
        </h2>
      </div>
      <Carousel
        plugins={[plugin.current]}
        className="w-full max-w-2xl h-fit"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="flex items-center justify-center">
          {Images.map((image) => (
            <CarouselItem key={image.id}>
              <div>
                <Card className="bg-transparent border-none shadow-none">
                  <CardContent className="flex items-center justify-center">
                    <Image
                      src={image.path}
                      width={960}
                      height={540}
                      alt="headers"
                      className="rounded-md"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          variant={"outline"}
          className="bg-transparent text-zinc-700 hover:bg-transparent hover:text-zinc-50 border-none"
        />
        <CarouselNext
          variant={"outline"}
          className="bg-transparent text-zinc-700 hover:bg-transparent hover:text-zinc-50 border-none"
        />
      </Carousel>

      <p className="text-sm text-zinc-700">
        My goal is to{" "}
        <Link
          href="https://en.wikipedia.org/wiki/Wikipedia:Merging"
          className="font-bold text-zinc-950"
        >
          merge
        </Link>{" "}
        the tech and construction industries.
      </p>

      <p className="text-xs text-zinc-700 italic mt-6">
        (Be aware site is still very much under construction but has purposely
        been published with non working and incomplete components.)
      </p>
    </>
  );
}
