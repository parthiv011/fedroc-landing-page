import { cn } from '@/lib/utils';
import {
  BadgeCheck,
  Check,
  EqualApproximately,
  Loader2Icon,
} from 'lucide-react';
import React from 'react';

export const SkeletonTwo = () => {
  const ROW_DATA = [
    {
      title: 'Fetching data',
      icon: <Check className="size-3 rounded-full bg-green-500 stroke-white" />,
      time: '10s',
    },
    {
      title: 'processing data',
      icon: <Check className="size-3 rounded-full bg-green-500 text-white" />,
      time: '20s',
    },
    {
      title: 'Performing Action',
      icon: <Check className="size-3 rounded-full bg-green-500 text-white" />,
      time: '30s',
    },
    {
      title: 'Waiting',
      icon: <Check className="size-3 rounded-full bg-green-500 text-white" />,
      time: '40s',
    },
    {
      title: 'generating report',
      icon: (
        <Loader2Icon className="size-3 animate-spin rounded-full text-yellow-500" />
      ),
      time: '40s',
    },
  ];
  return (
    <div
      style={{ transform: 'rotateX(20deg) rotateY(20deg) rotateZ(-20deg)' }}
      className={cn(
        'group mx-auto my-auto flex h-full w-full max-w-[85%] flex-col rounded-2xl border border-neutral-200 bg-neutral-100 mask-b-from-50% mask-radial-from-50% p-3 shadow-2xl dark:border-neutral-700 dark:bg-neutral-800',
        'translate-x-10',
        '[--pattern-fg:var(--color-neutral-950)]/5 dark:[--pattern-fg:var(--color-white)]/10'
      )}
    >
      <div className="flex items-center gap-3">
        <BadgeCheck className="size-4" />
        <p className="text-sm font-normal text-black dark:text-white">
          Campaign Planner
        </p>
      </div>
      <div className="relative mt-4 flex-1 overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-200 dark:border-neutral-800">
        {/* TAILWIND PATTERN */}
        <TailindPattern />

        <div className="absolute inset-0 h-full w-full translate-x-2 -translate-y-2 bg-neutral-100 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 dark:bg-neutral-800">
          {ROW_DATA.map((row, idx) => (
            <Row key={idx} icon={row.icon} time={row.time} text={row.title} />
          ))}
        </div>
      </div>
    </div>
  );
};

const Row = ({
  icon,
  text,
  time,
}: {
  icon: React.ReactNode;
  text: string;
  time: string;
}) => {
  return (
    <>
      <div className="flex items-center justify-between px-4 py-2">
        <div className="flex items-center justify-center gap-2">
          <div className="flex items-center justify-center">{icon}</div>
          <p className="text-sm text-neutral-500 capitalize">{text}</p>
        </div>
        <div className="flex items-center gap-1 text-neutral-400">
          <EqualApproximately className={cn('size-3')} />
          <p className="text-[10px] font-bold">{time}</p>
        </div>
      </div>
      <GradientHr />
    </>
  );
};

const TailindPattern = () => {
  return (
    <div className="absolute inset-0 bg-neutral-200 bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] dark:bg-neutral-600"></div>
  );
};

const GradientHr = () => {
  return (
    <div className="h-px w-full bg-linear-to-r from-transparent via-neutral-200 to-transparent dark:via-neutral-500"></div>
  );
};
