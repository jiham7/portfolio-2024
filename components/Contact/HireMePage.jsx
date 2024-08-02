"use client";

import React, { useEffect, useRef } from "react";
import { Card } from "../ui/card";
import { motion, useScroll } from "framer-motion";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { useStore } from "@/store/NavStore";
import { Button } from "../ui/button";
import { MagicCard } from "../ui/magicCard";
import { useTheme } from "next-themes";

const HireMePage = () => {
  const {theme} = useTheme()
  const { setTrigger } = useStore();

  useEffect(() => {
    setTrigger(false);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "smooth", delay: 0.3, duration: 1 }}
      className="w-full"
    >
      <MagicCard
        gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        className="w-full rounded-xl  flex p-4 lg:p-8 flex-col justify-between gap-7 items-center"
      >
        {/* <Card className="w-full rounded-xl  flex p-4 lg:p-8 flex-col justify-between gap-7"> */}
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "smooth", duration: 0.7 }}
          className="p-5 flex w-full flex-row items-center justify-between gap-2"
        >
          <div className="flex flex-row gap-3 justify-center items-center">
            <div className="size-2 rounded-full bg-secondary-foreground/10"></div>
            <h1 className="text-xl lg:text-2xl font-medium text-secondary-foreground/70 ">
              Contact
            </h1>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "smooth", duration: 0.7 }}
          className="px-0 pt-0 lg:pt-10 flex w-full flex-col  justify-between gap-5"
        >
          <div className="flex px-5 flex-col gap-3">
            <h1 className="text-4xl lg:text-6xl font-bold">Contact Form</h1>
          </div>

          <div className="px-5">
            <p className="text-secondary-foreground/70 text-lg lg:text-2xl pt-4">
              Got an idea and need design help? Reach out now
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "smooth", duration: 0.7 }}
        >
          <form
            action="https://formsubmit.co/webwithwaleed@gmail.com"
            method="POST"
            className="p-5 flex flex-col justify-center  gap-5 w-full"
          >
            <div className="flex flex-row justify-between gap-5 items-center">
              <Input type="text" name="name" placeholder="Name" required />
              <Input type="email" name="email" placeholder="Email" required />
            </div>
            <div className="flex flex-row justify-between gap-5 items-center">
              {/* <Input type="text" name="name" placeholder="Name" required /> */}
              <Textarea name="message" placeholder="Message" required />
            </div>
            <Button
              size="lg"
              variant="outline"
              className="bg-secondary-foreground/5 text-lg py-7"
              type="submit"
            >
              Submit
            </Button>
          </form>
        </motion.div>
        {/* </Card> */}
      </MagicCard>
    </motion.div>
  );
};

export default HireMePage;
