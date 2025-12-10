'use client';

import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
import Image from 'next/image';
import React from 'react';

export const LandingImages = () => {
  return (
    <div className="relative min-h-140 w-full pt-20 perspective-distant">
      <motion.div
        initial={{
          opacity: 0,
          y: -100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
          ease: 'easeOut',
        }}
        className="perspective-[4000px]"
      >
        <Image
          src="/hero-1.png"
          alt="Demo Image for Fedroc"
          width={1920}
          height={1080}
          className={cn(
            'absolute inset-0 rounded-lg mask-r-from-50% mask-b-from-50% shadow-xl'
          )}
          style={{
            transform: 'rotateY(20deg) rotateX(40deg) rotateZ(-20deg)',
          }}
        />
      </motion.div>
      <motion.div
        initial={{
          opacity: 0,
          y: -200,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
          delay: 0.1,
          ease: 'easeOut',
        }}
        className="translate-x-40 -translate-y-40 perspective-[4000px]"
      >
        <Image
          src="/hero.png"
          alt="Demo Image for Fedroc"
          width={1920}
          height={1080}
          className={cn(
            'absolute inset-0 rounded-lg mask-r-from-20% mask-b-from-20% shadow-xl'
          )}
          style={{
            transform: 'rotateY(20deg) rotateX(40deg) rotateZ(-20deg)',
          }}
        />
      </motion.div>
    </div>
  );
};
