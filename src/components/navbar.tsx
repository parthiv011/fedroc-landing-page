import React from 'react';
import { Logo } from './logo';
import { Container } from './container';
import Link from 'next/link';
import { Button } from './ui/button';
import { ModeToggle } from './mode-toggle';

export const Navbar = () => {
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
  return (
    <div className="border-b border-neutral-200 dark:border-neutral-800">
      <Container classname="flex justify-between items-center py-4">
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
    </div>
  );
};
