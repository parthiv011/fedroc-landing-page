'use client';

import React, { useState } from 'react';
import Link from 'next/link';

import { Logo } from './logo';
import { Container } from './container';
import { Button } from './ui/button';
import { ModeToggle } from './mode-toggle';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion, rgba } from 'motion/react';

const navLinks = [
  {
    title: 'Features',
    href: '/features',
  },
  {
    title: 'Products',
    href: '/products',
  },
  {
    title: 'Socials',
    href: '/socials',
  },
  {
    title: 'Pricing',
    href: '/pricing',
  },
];
export const Navbar = () => {
  return (
    <div className="border-b border-neutral-200 dark:border-neutral-800">
      <MobileNavbar />
      <DesktopNavbar />
    </div>
  );
};

const MobileNavbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="relative flex w-full justify-between px-4 py-2 md:hidden">
        <Logo />
        <button onClick={() => setOpen(!open)}>
          <SideBarIcon classname="size-4" />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              backdropFilter: 'blur(10px)',
              opacity: 1,
              background: 'transparent',
            }}
            exit={{
              opacity: 0,
              backdropFilter: 'blur(0px)',
              background: 'rgba(255, 255, 255, 0.5)',
            }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 h-full w-full px-4 py-1.5"
          >
            <div className="flex items-center justify-between">
              <Logo />
              <button
                className="absolute top-2 right-2"
                onClick={() => setOpen(false)}
              >
                <IconX classname="" />
              </button>
            </div>

            <div className="my-10 flex flex-col gap-6">
              {navLinks.map((link, index) => (
                <motion.div
                  key={index + link.title}
                  initial={{ opacity: 0, x: -4 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link
                    key={index}
                    href={link.href}
                    className="text-2xl font-medium text-neutral-600 dark:text-neutral-400"
                  >
                    {link.title}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const DesktopNavbar = () => {
  return (
    <Container classname="lg:flex hidden justify-between items-center py-4 px-4 md:px-8">
      <Logo />
      <div className="flex items-center gap-4">
        {navLinks.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="text-sm font-medium text-neutral-600 dark:text-neutral-400"
          >
            {item.title}
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-4">
        <Link
          href="/login"
          className="inline-block rounded-md px-4 py-2 text-sm font-medium text-neutral-600 dark:text-neutral-400"
        >
          Login
        </Link>
        <Button>Signup</Button>
        <ModeToggle />
      </div>
    </Container>
  );
};

const SideBarIcon = ({ classname }: { classname?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn(
        'icon icon-tabler icons-tabler-outline icon-tabler-layout-sidebar-right',
        classname
      )}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
      <path d="M15 4l0 16" />
    </svg>
  );
};

const IconX = ({ classname }: { classname?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn(
        'icon icon-tabler icons-tabler-outline icon-tabler-x',
        classname
      )}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </svg>
  );
};
