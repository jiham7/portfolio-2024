"use client";

import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { AppWindow, CirclePlus, CircleUserRound, House } from "lucide-react";
import Link from "next/link";
import { Card } from "../ui/card";
import { usePathname } from "next/navigation";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import { MagicCard } from "../ui/magicCard";
import { motion } from "framer-motion";
import { NeonGradientCard } from "../ui/NeonCard";

const Navbar = () => {
  const { setTheme, theme } = useTheme();
  const pathname = usePathname();

  return (
    <>
      <motion.div
        // initial={{ opacity: 0, y: -100 }}
        // animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "smooth",
          ease: "easeInOut",
          duration: 0.5,
        }}
        className="w-full  z-30 max-w-[1300px] pt-3  sticky top-0 flex flex-row justify-between gap-5 items-center"
      >
        <NeonGradientCard>
          <Card className="w-full flex px-4 py-3 lg:py-5 lg:px-10 !flex-row justify-between gap-5 items-center">
            {/* <MagicCard
            isNav={true}
            gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
            className="w-full flex px-4 py-3 lg:py-5 lg:px-10 !flex-row justify-between gap-5 items-center"
          > */}
            <div className="flex flex-row justify-center items-center gap-4">
              <TooltipProvider delayDuration={200}>
                <Tooltip>
                  <TooltipTrigger>
                    <div
                      className={`${
                        pathname === "/"
                          ? "bg-secondary-foreground/10"
                          : "hover:bg-secondary-foreground/10"
                      } transition-all duration-500 p-2 rounded-full`}
                    >
                      <Link
                        className={`${
                          pathname === "/" ? "" : "opacity-60 hover:opacity-100"
                        } transition-all duration-500`}
                        href={"/"}
                      >
                        <House size={25} strokeWidth={2} />
                      </Link>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Home</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider delayDuration={200}>
                <Tooltip>
                  <TooltipTrigger>
                    <div
                      className={`${
                        pathname === "/about"
                          ? "bg-secondary-foreground/10"
                          : "hover:bg-secondary-foreground/10 "
                      } transition-all duration-500 p-2 rounded-full`}
                    >
                      <Link
                        className={`${
                          pathname === "/about"
                            ? ""
                            : "opacity-60 hover:opacity-100"
                        } transition-all duration-500`}
                        href={"/about"}
                      >
                        <CircleUserRound size={25} strokeWidth={2} />
                      </Link>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>About</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider delayDuration={200}>
                <Tooltip>
                  <TooltipTrigger>
                    <div
                      className={`${
                        pathname === "/projects"
                          ? "bg-secondary-foreground/10"
                          : "hover:bg-secondary-foreground/10"
                      } transition-all duration-500 p-2 rounded-full`}
                    >
                      <Link
                        className={`${
                          pathname === "/projects"
                            ? ""
                            : "opacity-60 hover:opacity-100 "
                        } transition-all duration-500`}
                        href={"/projects"}
                      >
                        <AppWindow size={25} strokeWidth={2} />
                      </Link>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Projects</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className="flex flex-row justify-center items-center gap-4">
              <TooltipProvider delayDuration={200}>
                <Tooltip>
                  <TooltipTrigger>
                    <div
                      className={`hover:bg-secondary-foreground/10 flex flex-row justify-center items-center  transition-all duration-500 p-1 rounded-full`}
                    >
                      <div
                        className="opacity-60 hover:opacity-100 flex flex-row justify-center items-center"
                        onClick={() => {
                          setTheme(theme === "light" ? "dark" : "light");
                        }}
                      >
                        {theme === "light" ? (
                          <Moon size={25} strokeWidth={2} />
                        ) : (
                          <Sun size={25} strokeWidth={2} />
                        )}
                      </div>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{theme === "light" ? "Dark Mode" : "Light Mode"}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <Link
                href={"/contact"}
                className="flex flex-row gap-1 justify-center items-center"
                asChild
              >
                <Button size="sm">
                  <CirclePlus
                    size={15}
                    className="mr-1 text-secondary-foreground/50"
                  />
                  Hire Me
                </Button>
              </Link>
            </div>
            {/* </MagicCard> */}
          </Card>
        </NeonGradientCard>
      </motion.div>
    </>
  );
};

export default Navbar;
