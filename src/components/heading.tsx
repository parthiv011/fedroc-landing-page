import { cn } from '@/lib/utils';
import React from 'react';

export const Heading = ({
  children,
  classname,
  role = 'h2',
}: {
  children: React.ReactNode;
  classname?: string;
  role?: 'h1' | 'h2';
}) => {
  const Tag = role;

  return (
    <Tag
      className={cn(
        'font-display text-2xl font-bold tracking-tight md:text-4xl lg:text-6xl',
        classname
      )}
    >
      {children}
    </Tag>
  );
};
