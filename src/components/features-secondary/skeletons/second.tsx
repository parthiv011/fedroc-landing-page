import { Logo } from '@/components/logo';
import { SlackIcon } from '@/icons';
import { cn } from '@/lib/utils';
import React from 'react';

export const SkeletonTwo = () => {
  return (
    <div className="absolute inset-x-0 mx-auto flex h-full w-full flex-1 items-center justify-center gap-2 rounded-t-3xl p-2">
      <Circle classname="flex justify-center items-center dark:bg-neutral-800/80 bg-neutral-200/80">
        <Logo />
      </Circle>
      <div className="animate-orbit absolute inset-0 flex size-8 items-center justify-center rounded-xl border border-neutral-200">
        <SlackIcon className="size-6" />
      </div>
      <Circle classname="shadow z-9 dark:bg-neutral-800/70 bg-neutral-200/70 size-60" />
      <Circle classname="shadow z-8 dark:bg-neutral-800/60 bg-neutral-200/60 size-80" />
      <Circle classname="shadow z-7 dark:bg-neutral-800/50 size-100 bg-neutral-200/50" />
      <Circle classname="shadow z-6 dark:bg-neutral-800/40 size-120 bg-neutral-200/40" />
    </div>
  );
};

const Circle = ({
  classname,
  children,
}: {
  classname?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        'absolute inset-0 z-10 m-auto size-40 rounded-full border border-transparent bg-neutral-800',
        classname
      )}
    >
      {children}
    </div>
  );
};
