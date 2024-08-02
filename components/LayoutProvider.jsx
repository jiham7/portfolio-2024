"use client";

import Navbar from "./Navbar/Navbar";
import { motion } from "framer-motion";
import { MagicCard } from "./ui/magicCard";
import { useTheme } from "next-themes";
import { NeonGradientCard } from "./ui/NeonCard";
import { useStore } from "@/store/NavStore";
import {
  Tooltip,
  TooltipProvider,
  TooltipContent,
  TooltipTrigger,
} from "./ui/tooltip";
import Link from "next/link";
import { Instagram, Linkedin, Twitter } from "lucide-react";
import { Card } from "./ui/card";
import { urlFor } from "@/lib/ImageUrl";

const LayoutProvider = ({ children, data }) => {
  const { theme } = useTheme();

  const { trigger } = useStore();

  return (
    <div className="flex flex-col justify-center items-center">
      {!trigger && (
        <motion.div
          layoutId="nav"
          layoutScroll={true}
          layoutDependency={false}
          layout
          className="w-full max-w-[1300px] sticky z-50 top-0 justify-center items-center flex "
        >
          <Navbar />
        </motion.div>
      )}
      {trigger && (
        <motion.div className="w-full invisible max-w-[1300px] sticky z-50 top-0 justify-center items-center flex ">
          <Navbar />
        </motion.div>
      )}
      {children}
      {trigger && (
        <motion.div
          // initial={{ opacity: 0, y: -100 }}
          // animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "smooth",
            ease: "easeInOut",
            duration: 0.5,
          }}
          layout
          layoutScroll={true}
          layoutDependency={false}
          layoutId="nav"
          className="w-full z-30 max-w-[1300px] pb-3  sticky bottom-0 flex flex-col justify-center gap-5 items-center"
        >
          <NeonGradientCard>
            <Card className="w-full flex px-4 py-3 lg:py-5 lg:px-10 !flex-col justify-between gap-5 items-center">
              {/* <MagicCard
              isNav={false}
              gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
              className="w-full flex px-4 py-3 lg:py-5 lg:px-10 !flex-col justify-between gap-5 items-center"
            > */}
              <div className=" flex w-full flex-row items-center justify-between gap-5">
                <div className="flex flex-row gap-3 justify-center items-center">
                  <div className="size-2 rounded-full bg-secondary-foreground/10"></div>
                  <h1 className="text-xl font-medium text-secondary-foreground/70 ">
                    {data.title}
                  </h1>
                </div>
                <div className="flex flex-row gap-3 justify-center items-center">
                  {data.socialLinks.map((social, index) => (
                    <TooltipProvider delayDuration={200}>
                      <Tooltip>
                        <TooltipTrigger>
                          <div
                            className={`hover:bg-secondary-foreground/10 transition-all duration-500 p-2 rounded-full`}
                          >
                            <Link
                              className="opacity-60 hover:opacity-100 transition-all duration-500"
                              href={social.link}
                            >
                              <img className="w-[25px]" src={urlFor(social.icon).url()} />
                            </Link>
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{social.name}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  ))}
                </div>
              </div>
              <div className="pr-2 text-center flex w-full flex-row items-center justify-between gap-2">
                <p className="text-sm lg:text-base text-secondary-foreground/70">
                  Made by{" "}
                  <span>
                    <a
                      className="underline text-primary hover:text-secondary-foreground/70"
                      href="/"
                    >
                      Waleed
                    </a>
                  </span>
                </p>
                <p className="text-sm lg:text-base text-secondary-foreground/70">
                  {data.copywriteText}
                </p>
              </div>
              {/* </MagicCard> */}
            </Card>
          </NeonGradientCard>
        </motion.div>
      )}
      {!trigger && (
        <motion.div className="w-full invisible z-30 max-w-[1300px] pb-3  sticky bottom-0 flex flex-row justify-center gap-5 items-center">
          <NeonGradientCard>
            <MagicCard
              isNav={true}
              gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
              className="w-full flex px-4 py-3 lg:py-5 lg:px-10 !flex-row justify-between gap-5 items-center"
            >
              <div className=" flex w-full flex-row items-center justify-between gap-5">
                <div className="flex flex-row gap-3 justify-center items-center">
                  <div className="size-2 rounded-full bg-secondary-foreground/10"></div>
                  <h1 className="text-xl font-medium text-secondary-foreground/70 ">
                    {data.title}
                  </h1>
                </div>
                <div className="flex flex-row gap-3 justify-center items-center">
                  <TooltipProvider delayDuration={200}>
                    <Tooltip>
                      <TooltipTrigger>
                        <div
                          className={`hover:bg-secondary-foreground/10 transition-all duration-500 p-2 rounded-full`}
                        >
                          <Link
                            className="opacity-60 hover:opacity-100 transition-all duration-500"
                            href={"/"}
                          >
                            <Twitter size={25} strokeWidth={2} />
                          </Link>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Twitter</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <TooltipProvider delayDuration={200}>
                    <Tooltip>
                      <TooltipTrigger>
                        <div
                          className={`hover:bg-secondary-foreground/10 transition-all duration-500 p-2 rounded-full`}
                        >
                          <Link
                            className="opacity-60 hover:opacity-100 transition-all duration-500"
                            href={"/"}
                          >
                            <Instagram size={25} strokeWidth={2} />
                          </Link>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Instagram</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <TooltipProvider delayDuration={200}>
                    <Tooltip>
                      <TooltipTrigger>
                        <div
                          className={`hover:bg-secondary-foreground/10 transition-all duration-500 p-2 rounded-full`}
                        >
                          <Link
                            className="opacity-60 hover:opacity-100 transition-all duration-500"
                            href={"/"}
                          >
                            <Linkedin size={25} strokeWidth={2} />
                          </Link>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Linkedin</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>
            </MagicCard>
          </NeonGradientCard>
        </motion.div>
      )}
    </div>
  );
};

export default LayoutProvider;
