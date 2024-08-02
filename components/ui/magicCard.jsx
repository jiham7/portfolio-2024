"use client";

import React from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

import { cn } from "@/lib/utils";

export function MagicCard({
  children,
  className = "",
  gradientSize = 100,
  gradientColor = "#262626",
  isNav = false
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  return (
    <div
      onMouseMove={(e) => {
        const { left, top } = e.currentTarget.getBoundingClientRect();

        mouseX.set(e.clientX - left);
        mouseY.set(e.clientY - top);
      }}
      className={cn(
        "group relative rounded-2xl border z-0 border-secondary-foreground/10 size-full overflow-hidden bg-neutral-100 bg-card text-black dark:text-white",
        className,
      )}
    >
      <div className={`${isNav ? "z-30 w-full flex flex-row justify-between" : "z-30 w-full flex flex-col gap-5"}`}>{children}</div>
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
						radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px, ${gradientColor}, transparent 100%)
					`,
        }}
      />
    </div>
  );
}
