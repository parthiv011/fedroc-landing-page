'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Cloudways, HubspotIcon, Sheets } from '@/icons';
import { AlertCircle, CogIcon, FileIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

export const SkeletonOne = () => {
  return (
    <div className="absolute inset-x-0 mx-auto h-full w-full max-w-sm flex-1 rounded-t-3xl border border-neutral-200 bg-neutral-200 p-2 dark:border-neutral-800 dark:bg-neutral-800">
      <Card
        topIcon={<FileIcon className="size-4 text-white" />}
        title="Connect Data"
        description="Link CRMs, helpdesks and APIs to give agents secure, role based access."
        tags={[
          {
            icon: <Cloudways className="size-4 text-blue-400" />,
            text: 'Cloudways',
          },
          {
            icon: <HubspotIcon className="size-4 text-orange-400" />,
            text: 'Hubspot',
          },
          {
            icon: <Sheets className="size-4 text-green-400" />,
            text: 'Sheets',
          },
        ]}
      />

      <Card
        topIcon={<CogIcon className="size-4 text-white" />}
        title="Data Processing Logic"
        iconbg="bg-green-500"
        description="Create Workflows, design points, and conditional actions for each task."
      />
      <Card
        topIcon={<AlertCircle className="size-4 text-white" />}
        title="Erron Management"
        iconbg="bg-red-500"
        description="Managing error with proper case handling."
      />
    </div>
  );
};

const Card = ({
  topIcon,
  title,
  description,
  tags,
  iconbg,
}: {
  topIcon: React.ReactNode;
  title: string;
  description: string;
  tags?: { icon: React.ReactNode; text: string }[];
  iconbg?: string;
}) => {
  return (
    <>
      <div className="mb-2 flex items-start gap-4 rounded-2xl border border-transparent bg-neutral-100 p-4 ring-1 shadow-black/10 ring-black/10 dark:bg-neutral-900">
        <div
          className={cn(
            'mt-1 flex size-6 shrink-0 items-center justify-center rounded-full bg-blue-500',
            iconbg
          )}
        >
          {topIcon}
        </div>
        <div className="">
          <p className="text-lg font-bold text-neutral-800 dark:text-neutral-200">
            {title}
          </p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {description}
          </p>
          <div className="mt-2 flex flex-row flex-wrap gap-2">
            {tags &&
              tags.map((tag, index) => (
                <Tag key={index} icon={tag.icon} text={tag.text} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

const Tag = ({ icon, text }: { icon: React.ReactNode; text: string }) => {
  return (
    <div className="flex w-fit items-center gap-1 rounded-sm border border-neutral-200 px-1 py-0.5 text-sm dark:border-neutral-800">
      {icon}
      <p className="text-xs text-neutral-500 dark:text-neutral-300">{text}</p>
    </div>
  );
};
