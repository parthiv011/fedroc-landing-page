import { cn } from '@/lib/utils';
import React from 'react';

export const Card = ({
  classname,
  children,
}: {
  classname?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        'max-w-l mx-auto rounded-lg bg-neutral-50 dark:bg-neutral-800',
        classname
      )}
    >
      {children}
    </div>
  );
};

export const CardContent = ({
  classname,
  children,
}: {
  classname?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        'flex items-center justify-between px-4 pb-6 md:px-8 md:pb-12',
        classname
      )}
    >
      {children}
    </div>
  );
};

export const CardTitle = ({
  classname,
  children,
}: {
  classname?: string;
  children: React.ReactNode;
}) => {
  return (
    <h3 className={cn('font-display text-lg font-bold md:text-2xl', classname)}>
      {children}
    </h3>
  );
};

export const CardCTA = ({
  className,
  children,
  ...rest
}: React.ComponentProps<'button'>) => {
  return (
    <button
      className={cn(
        'flex size-5 shrink-0 items-center justify-center rounded-full border border-neutral-200 transition duration-300 active:scale-[0.8] md:size-10 dark:border-neutral-700',
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export const CardSkeleton = ({
  classname,
  children,
}: {
  classname?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        'relative h-80 overflow-hidden perspective-distant sm:h-60 md:h-80',
        classname
      )}
    >
      {children}
    </div>
  );
};
