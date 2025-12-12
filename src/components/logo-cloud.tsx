'use client';
import { motion } from 'motion/react';
import Image from 'next/image';
import React from 'react';

export const LogoCloud = () => {
  const logos = [
    {
      title: 'mcp',
      src: '/mcp.png',
    },
    {
      title: 'oracle',
      src: '/oracle.png',
    },
    {
      title: 'chatgpt',
      src: '/chatgpt.png',
    },
    {
      title: 'claude',
      src: '/claude.png',
    },
    {
      title: 'anthropic',
      src: '/anthropic.png',
    },
    {
      title: 'JP Morgan',
      src: '/blackrock.png',
    },
  ];
  return (
    <section className="pb-10 md:pb-20 lg:pb-32">
      <h2 className="mx-auto max-w-xl text-center font-medium text-neutral-600 dark:text-neutral-400">
        Trusted by modern operators across the finance world. <br />
        <span className="text-neutral-400">
          From pilot to scale without chaos.
        </span>
      </h2>
      <div className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-8 md:grid-cols-3">
        {logos.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{
              opacity: 0,
              y: -10,
              filter: 'blur(10px)',
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              filter: 'blur(0px)',
            }}
            transition={{
              duration: 0.5,
              ease: 'easeOut',
              delay: index * 0.1,
            }}
          >
            <Image
              key={item.title}
              src={item.src}
              alt={item.title}
              width={100}
              height={100}
              className="mx-auto size-20 object-contain"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};
