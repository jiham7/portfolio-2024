"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { CirclePlus, Copy } from "lucide-react";
import { AnimatedSubscribeButton } from "../ui/subscribedBtn";
import { ConfettiButton } from "../ui/animation";
import EmailCopyButton from "../EmailCopyButton";
import { urlFor } from "@/lib/ImageUrl";

const Header = ({ data }) => {
  return (
    <>
      <motion.div
        // initial={{ opacity: 0, y: 0 }}
        // whileInView={{ opacity: 1, y: 0 }}
        // transition={{ type: "smooth", duration: 0.7 }}
        className="p-5 flex w-full flex-row items-center justify-between gap-0"
      >
        <div className="flex flex-row gap-2 justify-center items-center">
          <div className="size-2 rounded-full bg-secondary-foreground/10"></div>
          <h1 className="text-lg lg:text-2xl font-medium text-secondary-foreground/70 ">
            {data.position}
          </h1>
        </div>
        <div className="flex flex-row gap-3 justify-center items-center">
          <div className="flex flex-row bg-[#223a2f] py-1 px-3 lg:py-2 lg:px-4 rounded-full justify-center items-center gap-1 lg:gap-2">
            <div className="size-2 rounded-full bg-[#28c780]"></div>
            <h1 className="text-xs lg:text-base text-[#28c780]">
              AVAILABLE <span className="lg:inline hidden">FOR WORK</span>
            </h1>
          </div>
        </div>
      </motion.div>
      <motion.div
        // initial={{ opacity: 0, y: 0 }}
        // whileInView={{ opacity: 1, y: 0 }}
        // transition={{ type: "smooth", duration: 0.7 }}
        className="p-5 py-0 lg:py-20 flex w-full flex-col items-start lg:flex-row  lg:items-center justify-between gap-5"
      >
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl lg:text-7xl font-semibold">{data.title}</h1>
          <p className="text-secondary-foreground/70 max-w-[600px] text-lg lg:text-3xl">
            {data.description}
          </p>
          <div className="flex flex-row gap-3">
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
            <EmailCopyButton email={data.email} />
          </div>
        </div>
        <div className=" h-full justify-center items-center flex ">
          <div>
            <img
              src={urlFor(data.image).url()}
              className="size-56 lg:size-80 border-2 border-secondary-foreground/10 p-2 rounded-full"
            />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Header;
