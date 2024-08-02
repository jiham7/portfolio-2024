"use client";

import { motion, useScroll } from "framer-motion";
import React, { useRef } from "react";
import { MagicCard } from "../ui/magicCard";
import { useTheme } from "next-themes";
import { Card } from "../ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import Link from "next/link";
import { CirclePlus, Copy, Instagram, Linkedin, Twitter } from "lucide-react";
import { ConfettiButton } from "../ui/animation";
import { AnimatedSubscribeButton } from "../ui/subscribedBtn";
import BlurIn from "../ui/blurin";
import { Button } from "../ui/button";
import { useStore } from "@/store/NavStore";
import { PortableText } from "next-sanity";
import { urlFor } from "@/lib/ImageUrl";

const SingleProjectPage = ({ data }) => {
  const { theme } = useTheme();

  const { trigger, setTrigger } = useStore();

  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const check = (value) => {
    if (value > 0.97) {
      if (trigger === false) {
        setTrigger(true);
      }
    } else {
      if (trigger === true) {
        setTrigger(false);
      }
    }
  };

  scrollYProgress.on("change", (e) => {
    check(e);
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "smooth", delay: 0.3, duration: 1 }}
      className="w-full"
      ref={ref}
    >
      <MagicCard
        gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        className="w-full rounded-xl  flex  flex-col justify-between items-center"
      >
        {/* <Card className="w-full rounded-xl  flex  flex-col justify-between"> */}
        <div className="lg:p-5 p-2">
          <Card className="p-5 bg-secondary-foreground/5 flex flex-row gap-10 justify-start items-center">
            <div className="space-y-2 lg:text-lg text-base">
              {data.details.map((info, index) => (
                <p className="text-secondary-foreground/60">{info.key}</p>
              ))}
            </div>
            <div className="space-y-2 lg:text-lg text-base">
              {data.details.map((info, index) => (
                <p>{info.value}</p>
              ))}
            </div>
          </Card>
        </div>
        <div className="p-4 lg:p-8 flex flex-col gap-5 text-secondary-foreground/70 text-xl lg:text-xl prose-headings:text-3xl prose-headings:lg:text-6xl prose-headings:md:text-4xl prose-headings:font-bold  prose-headings:text-white">
          <PortableText value={data.aboutProject} />
        </div>
        <div className="w-full flex flex-col gap-10 justify-center items-center p-5 my-10">
          {data.projectImages.map((img, index) => (
            <Card key={index} className="p-5 w-full  bg-secondary-foreground/5">
              <img
                src={urlFor(img).url()}
                className="rounded-2xl  !w-full !h-full object-cover"
              />
            </Card>
          ))}
        </div>
        <div className="p-4 lg:p-8 flex flex-col gap-5">
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
                  <Button size="sm">
                    <CirclePlus
                      size={15}
                      className="mr-1 text-secondary-foreground/50"
                    />
                    Hire Me
                  </Button>

                  <AnimatedSubscribeButton
                    subscribeStatus={false}
                    initialText={
                      <ConfettiButton size="sm">
                        <Copy
                          size={15}
                          className="mr-1 text-secondary-foreground/50"
                        />
                        Copy Email
                      </ConfettiButton>
                    }
                    changeText={
                      <Button variant="outline" size="sm">
                        <Copy
                          size={15}
                          className="mr-1 text-secondary-foreground/50"
                        />
                        Copied
                      </Button>
                    }
                  />
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
        </div>
        {/* </Card> */}
      </MagicCard>
    </motion.div>
  );
};

export default SingleProjectPage;
