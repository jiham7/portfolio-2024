"use client"

import { motion } from 'framer-motion'
import React from 'react'
import { Card } from '../ui/card'
import { Button } from '../ui/button'
import { ArrowRight } from 'lucide-react'
import {PortableText} from '@portabletext/react'


const AboutSection = ({data}) => {
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
              About Me
            </h1>
          </div>
          <div className="flex flex-row gap-3 justify-center items-center">
            <div className="flex flex-row  rounded-full justify-center items-center gap-2">
              <Button size="sm">
                More
                <ArrowRight
                  size={15}
                  className="ml-1 text-secondary-foreground/50"
                />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col pt-6 gap-5 text-secondary-foreground/70 text-lg lg:text-xl">
          <PortableText value={data.aboutMe} />
        </div>
    </Card>
  </motion.div>
  )
}

export default AboutSection