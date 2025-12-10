import { cn } from '@/lib/utils';
import React from 'react';

export const SubHeading = ({
  children,
  classname,
  role = 'p',
}: {
  children: React.ReactNode;
  classname?: string;
  role?: 'h2' | 'p';
}) => {
  const Tag = role;

  return (
    <Tag
      className={cn(
        'font-inter max-w-xl text-base tracking-tight text-neutral-400 md:text-lg lg:text-lg dark:text-neutral-600',
        classname
      )}
    >
      {children}
    </Tag>
  );
};
