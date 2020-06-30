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
    <Title>BNP Paribas Fortis complaint generator</Title>

    <Paragraph>
      We all love to have some{' '}
      <Link href="https://cake.app">
        Cake{' '}
        <span role="img" aria-label="Cake">
          🍰
        </span>
      </Link>
      .
      <br />
      Unfortunately{' '}
      <Link href="https://twitter.com/CakeDotApp/status/1273651173636149255">
        BNP Paribas Fortis doesn't
      </Link>
      .{' '}
      <span role="img" aria-label="sad face">
        😢
      </span>
    </Paragraph>

    <Paragraph>
      Let's urge BNP Paribas Fortis to develop a working{' '}
      <Link href="https://ec.europa.eu/info/law/payment-services-psd-2-directive-eu-2015-2366_en">
        PSD 2
      </Link>{' '}
      interface (API), so we all can have some Cake!{' '}
      <span role="img" aria-label="strong arm">
        💪
      </span>
    </Paragraph>

    <Paragraph>
      Fill in your details and send the generated template to{' '}
      <Link
        href="mailto:complaints.management@bnpparibasfortis.com?subject=Klanten klacht [CLIENT ID] PSD 2 API (gelinkt aan KQ10440226)"
        onClick={() => fetch('/.netlify/functions/trackEmailAddressClicked')}
      >
        complaints.management@bnpparibasfortis.com
      </Link>
      .
    </Paragraph>

    <Paragraph fontSize="small">
      This website is <span className="font-medium text-gray-700">not</span>{' '}
      affiliated in any way with neither{' '}
      <Link href="https://cake.app">Cake</Link> nor{' '}
      <Link href="http://bnpparibasfortis.be">BNP Paribas Fortis</Link>.
    </Paragraph>
  </div>
);
