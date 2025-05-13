'use client';
import { Transition, motion } from 'framer-motion';
import React from 'react';

interface MotionProps {
  opacity?: number;
  y?: number;
  rotate?: number;
}
interface Props {
  children: React.ReactNode;
  isVisible?: boolean;
  delay?: number;
  duration?: number;

  initial?: MotionProps;
  animate?: MotionProps;
  transition?: Transition;
}

const Motion: React.FC<Props> = ({
  children,
  isVisible,
  delay = 0,
  duration = 0.5,
  animate = { opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 },
  initial = { opacity: 0, y: 20 },
  transition = { duration: duration, delay: delay },
}) => {
  return (
    <motion.div
      initial={initial}
      animate={animate}
      transition={transition}
    >
      {children}
    </motion.div>
  );
};

export default Motion;
