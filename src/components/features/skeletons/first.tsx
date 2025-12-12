import { cn } from '@/lib/utils';
import { BadgeCheck, Clock, EqualApproximately } from 'lucide-react';
import React from 'react';

export const SkeletonOne = () => {
  return (
    <div>
      <SkeletonCard
        icon={<BadgeCheck className="size-4" />}
        title="Campaign Planner"
        description="Creates clear ready to use Campaign briefs using product info, audience
        data and clear past results."
        badge={<Badge text="120s" variant="success" />}
      />
    </div>
  );
};
const SkeletonCard = ({
  icon,
  title,
  description,
  badge,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  badge: React.ReactNode;
}) => {
  return (
    <div className="mx-auto w-full max-w-[90%] rounded-lg border border-neutral-200 p-3 dark:border-neutral-700">
      <div className="flex items-center gap-3">
        {icon}
        <p className="font-bold">{title}</p>
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
const SkeletonCard3 = () => {
  return (
    <div className="mx-auto w-full max-w-[90%] rounded-lg border border-neutral-200 bg-neutral-100 p-3 dark:border-neutral-700">
      <div className="flex items-center gap-3">
        <p className="font-bold"></p>
      </div>
      <p className="mt-3 font-medium text-neutral-500 dark:text-neutral-400"></p>
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
