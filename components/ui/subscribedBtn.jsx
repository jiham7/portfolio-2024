"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export const AnimatedSubscribeButton= ({
  subscribeStatus,
  changeText,
  initialText,
}) => {
  const [isSubscribed, setIsSubscribed] = useState();

  useEffect(()=>{
    if(isSubscribed){
        const timeout = setTimeout(() => {
            setIsSubscribed(false);  // Assuming setIsSubscribed is a state updater function
        },1500); // 3000 milliseconds = 3 seconds
        
        // Clean up the timeout to avoid memory leaks
        return () => clearTimeout(timeout);
    }

  },[isSubscribed, subscribeStatus])

  return (
    <AnimatePresence mode="wait">
      {isSubscribed ? (
        <motion.div
          className="relative flex items-center justify-center overflow-hidden"
        //   onClick={() => setIsSubscribed(false)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.span
            key="action"
            className="relative block h-full w-full font-semibold"
            initial={{ y: -50 }}
            animate={{ y: 0 }}
          >
            {changeText}
          </motion.span>
        </motion.div>
      ) : (
        <motion.div
          className="relative cursor-pointer items-center justify-center rounded-md"
        //   style={{ backgroundColor: buttonColor, color: buttonTextColor }}
          onClick={() => setIsSubscribed(true)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.span
            key="reaction"
            className="relative block font-semibold"
            initial={{ x: 0 }}
          >
            {initialText}
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
