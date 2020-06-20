import React, { FunctionComponent } from 'react';

import { Link } from './Link';
import { Paragraph } from './Paragraph';

const Title: FunctionComponent = ({ children }) => (
  <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
    {children}
  </h2>
);

export const Intro: FunctionComponent = () => (
  <div className="text-center">
    <Title>BNP Paribas Fortis complaint form</Title>

    <Paragraph>
      We all love to have some <Link href="https://cake.app">Cake 🍰</Link>
      .
      <br />
      Unfortunately{' '}
      <Link href="https://twitter.com/CakeDotApp/status/1273651173636149255">
        BNP Paribas Fortis doesn't
      </Link>
      . 😢
    </Paragraph>

    <Paragraph>
      Let's make BNP Paribas Fortis{' '}
      <Link href="https://ec.europa.eu/info/law/payment-services-psd-2-directive-eu-2015-2366_en">
        PSD 2
      </Link>{' '}
      compliant, so we all can have some Cake! 💪
    </Paragraph>

    <Paragraph>
      Fill in your details and send the generated template to{' '}
      <Link href="mailto:complaints.management@bnpparibasfortis.com">
        complaints.management@bnpparibasfortis.com
      </Link>
      .
    </Paragraph>
  </div>
);
