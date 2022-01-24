import type { ComponentProps, FunctionComponent } from 'react';
import { useEffect, useState } from 'react';

import { Form } from './Form';
import { Intro } from './Intro';
import { Pattern } from './Pattern';
import { SocialLinks } from './SocialLinks';
import { Template } from './Template';

type TemplateDetails = Omit<ComponentProps<typeof Template>, 'children'>;
export const App: FunctionComponent = () => {
  const [templateDetails, setTemplateDetails] =
    useState<TemplateDetails | null>(null);

  useEffect(() => {
    fetch('/.netlify/functions/trackPageViewed');
  }, []);

  return (
    <div className="overflow-hidden bg-white py-16 px-4 sm:px-6 lg:px-8 lg:py-24">
      <div className="relative mx-auto max-w-xl">
        <Pattern className="absolute left-full translate-x-1/2 transform" />

        <Pattern className="absolute right-full bottom-0 -translate-x-1/2 transform" />

        <Intro />

        {templateDetails ? (
          <Template {...templateDetails} />
        ) : (
          <Form onSubmit={setTemplateDetails} />
        )}

        <SocialLinks />
      </div>
    </div>
  );
};
