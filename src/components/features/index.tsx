import React from 'react';
import { Container } from '../container';
import { Heading } from '../heading';
import { SubHeading } from '../subheading';
import { Card, CardContent, CardCTA, CardSkeleton, CardTitle } from './card';
import { PlusIcon } from 'lucide-react';
import { SkeletonOne } from './skeletons/first';
import { SkeletonThree } from './skeletons/third';
import { SkeletonTwo } from './skeletons/second';

export const Features = () => {
  return (
    <Container classname="py-10 lg:py-32 md:py-20 px-4 md:px-8">
      <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-baseline-last">
        <Heading classname="text-center lg:text-left">
          Built for Fast Moving <br />
          Teams that need control.
        </Heading>
        <SubHeading classname="text-center lg:text-left mx-auto lg:mx-0">
          Agents work inside your existing tools, with built-in approvals,
          brands and policy guadrails, and full traceability. Every action is
          auditable every action is accountable.
        </SubHeading>
      </div>
      <div className="my-10 grid grid-cols-1 gap-4 md:my-20 md:grid-cols-2 lg:grid-cols-3">
        <Card classname="rounded-tl-3xl rounded-bl-3xl">
          <CardSkeleton>
            <SkeletonOne />
          </CardSkeleton>
          <CardContent>
            <CardTitle>Prebuilt Agents, Tuned To Your Workflows.</CardTitle>
            <CardCTA>
              <PlusIcon />
            </CardCTA>
          </CardContent>
        </Card>
        <Card>
          <CardSkeleton>
            <SkeletonTwo />
          </CardSkeleton>
          <CardContent>
            <CardTitle>Automate Handoffs, Reduce ops friction.</CardTitle>
            <CardCTA>
              <PlusIcon />
            </CardCTA>
          </CardContent>
        </Card>
        <Card classname="rounded-tr-3xl rounded-br-3xl">
          <CardSkeleton>
            <SkeletonThree />
          </CardSkeleton>
          <CardContent>
            <CardTitle>Approve, Gaurdrails and Fully Auditability.</CardTitle>
            <CardCTA>
              <PlusIcon />
            </CardCTA>
          </CardContent>
        </Card>
      </div>
    </Container>
  );
};
