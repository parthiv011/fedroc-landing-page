import { cn } from '@/lib/utils';
import { BadgeCheck, Clock, EqualApproximately } from 'lucide-react';
import React from 'react';

export const SkeletonOne = () => {
  return (
    <div className="h-full w-full -translate-y-15 scale-[1.25] rotate-x-30 -rotate-y-20 rotate-z-15 mask-r-from-50% mask-radial-from-50% perspective-distant">
      <SkeletonCard
        classname="absolute left-12 bottom-0 z-30 max-w-[90%]"
        icon={<BadgeCheck className="size-4" />}
        title="Campaign Planner"
        description="Creates clear ready to use Campaign briefs using product info, audience
        data and clear past results."
        badge={<Badge text="40s" variant="success" />}
      />
      <SkeletonCard
        classname="absolute bottom-10 left-8 z-20"
        icon={<BadgeCheck className="size-4" />}
        title="Issue Tracker"
        description="Creates clear ready to use Campaign briefs using product info, audience
        data and clear past results."
        badge={<Badge text="10s" variant="warning" />}
      />
      <SkeletonCard
        classname="absolute bottom-20 left-4 max-w-[80%] z-10"
        icon={<BadgeCheck className="size-4" />}
        title="Risk Analysis"
        description="Creates clear ready to use Campaign briefs using product info, audience
        data and clear past results."
        badge={<Badge text="120s" variant="danger" />}
      />
    </div>
  );
};
const SkeletonCard = ({
  icon,
  title,
  description,
  badge,
  classname,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  badge: React.ReactNode;
  classname?: string;
}) => {
  return (
    <div
      className={cn(
        'mx-auto my-auto h-fit w-full max-w-[80%] rounded-lg border border-neutral-200 bg-neutral-100 p-3 shadow-2xl dark:border-neutral-700 dark:bg-neutral-800',
        classname
      )}
    >
      <div className="flex items-center gap-3">
        {icon}
        <p className="text-sm font-normal text-black dark:text-white">
          {title}
        </p>
        {badge}
      </div>
      <p className="mt-3 font-medium text-neutral-500 dark:text-neutral-400">
        {description}
      </p>
      <div className="flex flex-wrap items-center gap-2">
        <Tag text="Google Ads" />
        <Tag text="Saas" />
        <Tag text="Content" />
      </div>
    </div>
  );
};

const Badge = ({
  variant,
  text,
  classname,
}: {
  variant?: 'success' | 'danger' | 'warning';
  text: string;
  classname?: string;
}) => {
  return (
    <div
      className={cn(
        'flex w-fit items-center gap-1 rounded-full px-1 py-0.5',
        variant === 'danger' && 'border bg-red-300/10 text-red-500',
        variant === 'success' &&
          'border-green-300 bg-green-300/10 text-green-500',
        variant === 'warning' &&
          'border-yellow-300 bg-yellow-300/10 text-yellow-500',
        classname
      )}
    >
      <Clock className={cn('size-3')} />
      <EqualApproximately className={cn('size-3')} />
      <p className="text-xs font-bold">{text}</p>
    </div>
  );
};

const Tag = ({ text }: { text: string }) => {
  return (
    <div className="rounded-sm bg-neutral-200 px-2 py-1 text-xs dark:bg-neutral-700">
      {text}
    </div>
  );
};
