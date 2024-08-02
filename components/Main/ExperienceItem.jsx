"use client";

import React, { useState } from "react";
import { Card } from "../ui/card";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "../ui/badge";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const ExperienceItem = ({date, title, company, link, description, tags}) => {

  const [hover, setHover] = useState(false);
  const router = useRouter()

  return (
    <motion.div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={()=>router.push(link)}
    >
      <Card className="p-5 hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all duration-200 cursor-pointer">
        <div className="flex flex-row justify-between gap-4 items-center">
          <div>
            <div className="text-secondary-foreground/50 max-w-[150px] w-full text-sm">
              {date}
            </div>

            <div className="flex flex-row justify-start gap-2 items-center">
              <p>{title}</p>
              <span className="size-1 rounded-full bg-primary"></span>
              <p>{company}</p>
            </div>
          </div>
          <motion.div animate={{
            y: hover ? -5 : 0, 
            x: hover ? 5 : 0
          }}>
            <ArrowUpRight size={20} />
          </motion.div>
        </div>
        <p className="text-secondary-foreground/50">
          {description}
        </p>
        <div className="flex flex-row gap-2 pt-2 flex-wrap items-center justify-start">
        {tags.map((tag, index)=>{
            return (
                <Badge key={index} variant="skill">{tag.name}</Badge>
            )
        })}
         
        </div>
      </Card>
    </motion.div>
  );
};

export default ExperienceItem;
