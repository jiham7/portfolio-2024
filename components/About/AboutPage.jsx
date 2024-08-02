"use client";

import React, { useEffect, useRef } from "react";
import { Card } from "../ui/card";
import { useTheme } from "next-themes";
import { MagicCard } from "../ui/magicCard";
import { motion, useScroll } from "framer-motion";
import SecondaryFooter from "./SecondaryFooter";
import { useStore } from "@/store/NavStore";
import { PortableText } from "next-sanity";
import { urlFor } from "@/lib/ImageUrl";

const AboutPage = ({ data }) => {
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
      ref={ref}
    >
      {/* <Card className="w-full rounded-xl  flex p-4 lg:p-8 flex-col justify-between gap-7"> */}
      <MagicCard
        gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        className="w-full rounded-xl  flex p-4 lg:p-8 flex-col justify-between gap-7 items-center"
      >
        {/* about page content */}
        <>
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "smooth", duration: 0.7 }}
            className="p-5 flex w-full flex-row items-center justify-between gap-2"
          >
            <div className="flex flex-row gap-3 justify-center items-center">
              <div className="size-2 rounded-full bg-secondary-foreground/10"></div>
              <h1 className="text-xl lg:text-2xl font-medium text-secondary-foreground/70 ">
                About
              </h1>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "smooth", duration: 0.7 }}
            className="px-0 pt-0 lg:pt-10 flex w-full flex-col  justify-between gap-5"
          >
            <div className="text-secondary-foreground/70 text-xl lg:text-xl prose-headings:text-3xl prose-headings:lg:text-6xl prose-headings:md:text-4xl prose-headings:font-bold space-y-5 prose-headings:text-white" >
              <PortableText value={data.aboutMe} />
            </div>
            <div className="w-full flex justify-center items-center my-10">
              <Card className="p-5 w-fit  bg-secondary-foreground/5">
                <img
                  src={urlFor(data.image).url()}
                  className="rounded-2xl max-w-[900px]  max-h-[900px] !w-full !h-full object-cover"
                />
              </Card>
            </div>
          </motion.div>
        </>
        {/* footer  */}
        <SecondaryFooter />
      </MagicCard>
      {/* </Card> */}
    </motion.div>
  );
};

export default AboutPage;
