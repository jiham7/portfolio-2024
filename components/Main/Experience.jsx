"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Card } from "../ui/card";
import ExperienceItem from "./ExperienceItem";

const Experience = ({ data }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

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
                My Expeirence
              </h1>
            </div>
          </div>
        </div>
        <div className="flex flex-col pt-5 gap-2">
          {data?.expeirence?.map((data, index) => {
            return (
              <motion.div
                key={index}
                className="w-full"
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                animate={{
                  opacity:
                    hoveredIndex === null || hoveredIndex === index ? 1 : 0.5,
                }}
              >
                <ExperienceItem
                  date={data.date}
                  title={data.title}
                  company={data.company}
                  link={data.link}
                  description={data.description}
                  tags={data.tags}
                />
              </motion.div>
            );
          })}
        </div>
      </Card>
    </motion.div>
  );
};

export default Experience;
