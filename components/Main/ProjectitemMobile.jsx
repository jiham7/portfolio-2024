"use client";

import React, { useState } from "react";
import { Card } from "../ui/card";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { PinContainer } from "../ui/3dPin";

const ProjectitemMobile = ({ src, title, description, link }) => {
  const [hover, setHover] = useState(false);
  const router = useRouter();

  return (
    <motion.div
      animate={{
        y: hover ? -3 : 0,
      }}
      transition={{
        type: "smooth",
        duration: 0.2,
      }}
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
      onClick={() => router.push(link)}
      className="w-full hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all duration-200 cursor-pointer"
    >
      <Card className="p-3 lg:p-10 flex flex-row lg:flex-col justify-between items-center bg-secondary-foreground/5">
        <div className="flex flex-row lg:flex-col gap-4 w-full justify-start items-center lg:items-start">
          <div className="lg:w-full ">
            <img
              src={src}
              className="p-2 size-20 lg:size-full lg:p-0 lg:w-full bg-secondary/40 rounded-full lg:rounded-2xl"
            />
          </div>
          <div>
            <h1 className="text-xl font-semibold">{title}</h1>
            <h1 className="text-lg text-secondary-foreground/70 ">
              {description}
            </h1>
          </div>
        </div>
        <motion.div
          animate={{
            x: hover ? 5 : 0,
          }}
          transition={{
            type: "smooth",
            duration: 0.2,
          }}
          className="inline lg:hidden"
        >
          <ChevronRight className="text-secondary-foreground/50" />
        </motion.div>
      </Card>
    </motion.div>
  );
};

export default ProjectitemMobile;
