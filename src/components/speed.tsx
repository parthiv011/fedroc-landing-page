import React from 'react';
import { Container } from './container';
import { Heading } from './heading';
import { SubHeading } from './subheading';
import { LandingImages } from './landing-images';

export const Speed = () => {
  return (
    <Container classname="relative overflow-hidden pt-10 md:pt-20 lg:pt-10">
      <Heading>
        Built for Speed
        <br />
        Designed for Scale
      </Heading>
      <SubHeading classname="py-8">
        Unlock AI investment tools that analyze, forecast, and optimize—without
        changing how you manage portfolios.
      </SubHeading>
      <LandingImages />
    </Container>
  );
};
