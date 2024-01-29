"use client";

import React, { useState } from "react";
import {
  BookIcon,
  FolderDotIcon,
  HomeIcon,
  MailIcon,
  MenuIcon,
  PencilIcon,
  ScrollIcon,
} from "lucide-react";
import Link from "next/link";
import { useStore } from "@/src/lib/store";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";

import { usePathname } from "next/navigation";

const HorizontalHeader = () => {
  const isExpanded = useStore((state) => state.isExpanded);
  const toggle = useStore((state) => state.toggle);
  //   const [isExpanded, setIsExpanded] = useState(false);
  const [showIcons, setShowIcons] = useState([false, false, false]);
  const pathname = usePathname();

  const isActive = (path: string) => path === pathname;

  const handleClick = () => {
    toggle();
    const newIsExpanded = !isExpanded;
    if (newIsExpanded) {
      setTimeout(() => {
        setShowIcons([true, false, false]);
      }, 250);
      setTimeout(() => {
        setShowIcons([true, true, false]);
      }, 300);
      setTimeout(() => {
        setShowIcons([true, true, true]);
      }, 400);
    } else {
      setShowIcons([false, false, false]);
    }
  };

  const divStyle = isExpanded
    ? { width: "30rem", transition: "width 0.5s ease-in-out" }
    : { width: "48px", transition: "width 0.5s ease-in-out" };

  return (
    <div className="fixed bottom-0 flex mx-auto justify-center w-full pb-6 z-50 ">
      <div
        className="h-12 w-full flex justify-center items-center border border-zinc-700 rounded-md bg-zinc-900 p-2 space-x-10"
        style={divStyle}
      >
        {showIcons[2] && (
          <Link href={"/"}>
            <HomeIcon
              size={28}
              className={
                isActive("/")
                  ? "items-center hover:text-zinc-50 text-zinc-50"
                  : "items-center hover:text-zinc-50  text-zinc-400"
              }
            />
          </Link>
        )}
        {showIcons[1] && (
          <Link href={"/projects"}>
            <FolderDotIcon
              size={28}
              className={
                isActive("/projects")
                  ? "items-center hover:text-zinc-50 text-zinc-50"
                  : "items-center hover:text-zinc-50  text-zinc-400"
              }
            />
          </Link>
        )}
        {showIcons[0] && (
          <Link href={"/blog"}>
            <PencilIcon
              size={28}
              className={
                isActive("/blog")
                  ? "items-center hover:text-zinc-50 text-zinc-50"
                  : "items-center hover:text-zinc-50  text-zinc-400"
              }
            />
          </Link>
        )}
        <MenuIcon
          size={28}
          onClick={handleClick}
          className="cursor-pointer text-zinc-50"
        />
        {showIcons[0] && (
          <Link href={"/resources"}>
            <BookIcon
              size={28}
              className={
                isActive("/resources")
                  ? "items-center hover:text-zinc-50 text-zinc-50"
                  : "items-center hover:text-zinc-50  text-zinc-400"
              }
            />
          </Link>
        )}
        {showIcons[1] && (
          <Link href={"/cv"}>
            <ScrollIcon
              size={28}
              className={
                isActive("/cv")
                  ? "items-center hover:text-zinc-50 text-zinc-50"
                  : "items-center hover:text-zinc-50  text-zinc-400"
              }
            />
          </Link>
        )}
        {showIcons[2] && (
          <li className="flex justify-end">
            <Dialog>
              <DialogTrigger asChild>
                <div className="items-center hover:text-zinc-50 text-zinc-400 flex hover:cursor-pointer">
                  <MailIcon size={28} />
                </div>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md bg-zinc-900 text-zinc-50">
                <DialogHeader>
                  <DialogTitle>Share link</DialogTitle>
                  <DialogDescription>
                    Anyone who has this link will be able to view this.
                  </DialogDescription>
                </DialogHeader>
                <div className="flex items-center space-x-2">
                  <div className="grid flex-1 gap-2"></div>
                  <Button type="submit" size="sm" className="px-3">
                    <span className="sr-only">Copy</span>
                    {/* <Copy className="h-4 w-4" /> */}
                  </Button>
                </div>
                <DialogFooter className="sm:justify-start">
                  <DialogClose asChild>
                    <Button type="button" variant="secondary">
                      Close
                    </Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </li>
        )}
      </div>
    </div>
  );
};

export default HorizontalHeader;
