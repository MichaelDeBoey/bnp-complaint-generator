import React, {ComponentProps, FunctionComponent, useEffect, useState} from 'react';

import { Form } from './Form';
import { Intro } from './Intro';
import { Pattern } from './Pattern';
import { SocialLinks } from './SocialLinks';
import { Template } from './Template';

type TemplateDetails = Omit<ComponentProps<typeof Template>, 'children'>;
export const App: FunctionComponent = () => {
  const [
    templateDetails,
    setTemplateDetails,
  ] = useState<TemplateDetails | null>(null);

  useEffect(() => {
    fetch('/.netlify/functions/trackPageViewed');
  }, []);

  return (
    <div className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
      <div className="relative max-w-xl mx-auto">
        <Pattern className="absolute left-full transform translate-x-1/2" />

        <Pattern className="absolute right-full bottom-0 transform -translate-x-1/2" />

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
