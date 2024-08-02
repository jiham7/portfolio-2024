"use client"

import React from "react";
import { Card } from "../ui/card";
import { ConfettiButton } from "../ui/animation";
import BlurIn from "../ui/blurin";
import { AnimatedSubscribeButton } from "../ui/subscribedBtn";
import {
  CirclePlus,
  Copy,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import { Button } from "../ui/button";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import Link from "next/link";
import { TooltipContent } from "../ui/tooltip";
import { motion } from "framer-motion";
import EmailCopyButton from "../EmailCopyButton";

const SecondaryFooter = () => {
  return (
    <>
      <Card className="p-5 bg-secondary-foreground/5 border-0 mt-10">
     <motion.div
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "smooth", duration: 0.7 }}
          className="p-5 py-10 lg:py-40 flex w-full flex-col items-center justify-center text-center gap-5"
        >
          <div className="flex flex-col gap-3">
            <BlurIn
              word="Let’s work together"
              className="text-4xl lg:text-7xl font-semibold"
            />
            <p className="text-secondary-foreground/70 text-lg lg:text-3xl">
              Creating user experience and visual appealing design
            </p>
            <div className="flex w-full items-center justify-center flex-row gap-3">
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

           <EmailCopyButton/>
            </div>
          </div>
        </motion.div>
     </Card>
        {/* <motion.div
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "smooth", duration: 0.7 }}
          className="flex flex-col w-full justify-center items-center gap-5"
        >
          <Card className="w-full bg-secondary-foreground/5 border-0">
            <div className="p-5 flex w-full flex-row items-center justify-between gap-5">
              <div className="flex flex-row gap-3 justify-center items-center">
                <div className="size-2 rounded-full bg-secondary-foreground/10"></div>
                <h1 className="text-xl lg:text-2xl font-medium text-secondary-foreground/70 ">
                  Follow Me
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
          </Card>
          <Card className="w-full bg-secondary-foreground/5 border-0">
            <div className="p-5 py-10 text-center flex w-full flex-col items-center justify-center gap-2">
              <p className="text-sm lg:text-base text-secondary-foreground/70">
                © 2024 Brian Do
              </p>
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
            </div>
          </Card>
        </motion.div> */}
    </>
  )
}

export default SecondaryFooter