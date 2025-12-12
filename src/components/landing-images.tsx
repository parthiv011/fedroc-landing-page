'use client';

import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
import Image from 'next/image';
import React from 'react';

export const LandingImages = () => {
  return (
    <div className="relative">
      <div className="bg-background absolute inset-x-0 z-50 h-full w-full mask-t-from-10%"></div>
      <div className="relative min-h-72 w-full translate-x-10 pt-20 perspective-distant sm:min-h-80 md:min-h-100 md:translate-x-28 lg:min-h-140">
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
          className="translate-x-20 -translate-y-10 perspective-[4000px] md:-translate-y-20 lg:-translate-y-40"
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
    </div>
  );
};
