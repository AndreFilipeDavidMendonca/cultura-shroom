import { ReactNode } from 'react';
import { motion } from 'motion/react';

interface ScrollAnimateProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  id?: string;
  as?: 'div' | 'section';
}

export default function ScrollAnimate({
  children,
  className = '',
  delay = 0,
  duration = 0.8,
  id,
  as = 'div'
}: ScrollAnimateProps) {
  // Select either motion.section or motion.div
  const Component = as === 'section' ? motion.section : motion.div;

  return (
    <Component
      id={id}
      className={className}
      initial={{ opacity: 0, y: 40, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-12% 0px -12% 0px' }}
      transition={{
        duration,
        delay,
        ease: [0.215, 0.610, 0.355, 1.000], // Custom elegant easeOutCubic
      }}
    >
      {children}
    </Component>
  );
}
