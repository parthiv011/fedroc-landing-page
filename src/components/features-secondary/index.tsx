'use client';
import React from 'react';
import { Container } from '../container';
import { cn } from '@/lib/utils';
import { SkeletonOne } from './skeletons/first';
import { SkeletonTwo } from './skeletons/second';

export const FeatureSecondary = () => {
  return (
    <section className="relative overflow-hidden pt-10 md:pt-20 lg:py-32">
      <Container classname="">
        <div className="grid grid-cols-1 divide-x divide-neutral-200 border-y border-neutral-200 md:grid-cols-2 dark:divide-neutral-800 dark:border-neutral-800">
          <div>
            <div className="p-4 md:p-8">
              <h2 className="text-lg font-bold text-neutral-800 dark:text-neutral-200">
                Agent Studio
              </h2>
              <CardDescription>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. At
                consequatur porro voluptate tempore nihil!
              </CardDescription>
            </div>
            <CardSkeleton>
              <SkeletonOne />
            </CardSkeleton>
          </div>
          <div>
            <div className="p-4 md:p-8">
              <h2 className="text-lg font-bold text-neutral-800 dark:text-neutral-200">
                Multi-agent Orchestration
              </h2>
              <CardDescription>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                praesentium sequi saepe!
              </CardDescription>
            </div>
            <CardSkeleton>
              <SkeletonTwo />
            </CardSkeleton>
          </div>
        </div>
      </Container>
    </section>
  );
};

export const CardDescription = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <p className="mt-2 max-w-sm text-neutral-600 dark:text-neutral-400">
      {children}
    </p>
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
        'relative flex h-80 flex-col overflow-hidden perspective-distant sm:h-60 md:h-80',
        classname
      )}
    >
      {children}
    </div>
  );
};
