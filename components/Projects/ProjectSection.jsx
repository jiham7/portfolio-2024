"use client";

import { motion } from "framer-motion";
import React from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import Projectitem from "../Main/Projectitem";
import ProjectitemMobile from "../Main/ProjectitemMobile";
import Link from "next/link";

const ProjectSection = () => {
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
                Projects
              </h1>
            </div>
            <div className="flex flex-row gap-3 justify-center items-center">
              <div className="flex flex-row  rounded-full justify-center items-center gap-2">
                <Link href={'/projects'}>
                  <Button size="sm">
                    View All
                    <ArrowRight
                      size={15}
                      className="ml-1 text-secondary-foreground/50"
                    />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className=" pb-10 hidden xl:flex gap-4 flex-col lg:flex-row w-full flex-1">
          <Projectitem
            src="https://framerusercontent.com/images/11rNeoQ4cbIflUKMKRcTruAT4.svg"
            title="Morva Labs"
            description="Visual Desgin, Branding"
            link="/projects/morva-labs"
          />
          <Projectitem
            src="https://framerusercontent.com/images/lkLwoc5QonpfJtmxeyujVtespnI.svg"
            title="Rectangle"
            description="Product design, Icon design"
            link="/projects/rectangle"
          />
          <Projectitem
            src="https://framerusercontent.com/images/GYZJhZwKqD1jeRCg4q155yCAVM.svg"
            title="Simply"
            description="Landing page, Illustration design"
            link="/projects/simply"
          />
        </div>
        <div className=" py-5  xl:hidden gap-4 flex-col lg:flex-row flex w-full flex-1">
          <ProjectitemMobile
            src="https://framerusercontent.com/images/11rNeoQ4cbIflUKMKRcTruAT4.svg"
            title="Morva Labs"
            description="Visual Desgin, Branding"
            link="/projects/morva-labs"
          />
          <ProjectitemMobile
            src="https://framerusercontent.com/images/lkLwoc5QonpfJtmxeyujVtespnI.svg"
            title="Rectangle"
            description="Product design, Icon design"
            link="/projects/rectangle"
          />
          <ProjectitemMobile
            src="https://framerusercontent.com/images/GYZJhZwKqD1jeRCg4q155yCAVM.svg"
            title="Simply"
            description="Landing page, Illustration design"
            link="/projects/simply"
          />
        </div>
      </Card>
    </motion.div>
  );
};

export default ProjectSection;
