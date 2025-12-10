import React from 'react';
import Link from 'next/link';
import { Container } from './container';
import { Heading } from './heading';
import { SubHeading } from './subheading';
import { Button } from './ui/button';
import { LandingImages } from './landing-images';

export const Hero = () => {
  return (
    <div className="pt-10 md:pt-20 lg:pt-32">
      <Container>
        <Heading role="h1">
          Insights that grow wealth. <br />
          Guardrails that keep you safe.
        </Heading>
        <SubHeading classname="py-8">
          Unlock AI investment tools that analyze, forecast, and
          optimize—without changing how you manage portfolios.
        </SubHeading>
        <div className="flex items-center gap-6">
          <Button className="shadow-brand">Start your free trial</Button>
          <Button asChild variant="outline">
            <Link href="#">View role based demos</Link>
          </Button>
        </div>
        <LandingImages />
      </Container>
    </div>
  );
};
