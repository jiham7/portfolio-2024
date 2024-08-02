"use client";

import { motion } from "framer-motion";
import React from "react";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";

const TechStack = ({ data }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ type: "smooth", duration: 0.7 }}
    >
      <Card className="w-full p-5 bg-secondary-foreground/5 border-0">
        <div className=" w-full">
          <div className=" flex w-full flex-row items-center justify-between gap-5">
            <div className="flex flex-row gap-3 justify-center items-center">
              <div className="size-2 rounded-full bg-secondary-foreground/10"></div>
              <h1 className="text-xl font-medium text-secondary-foreground/70 ">
                My Tech Stack
              </h1>
            </div>
          </div>
        </div>
        <div className="flex flex-row flex-wrap  items-center pt-5 gap-2 ">
          {data.techStack.map((tag, index) => (
            <Badge key={index} variant={"secondary"}>{tag.name}</Badge>
          ))}
        
        </div>
      </Card>
    </motion.div>
  );
};

export default TechStack;
