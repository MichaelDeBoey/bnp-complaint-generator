import React, { FunctionComponent, useState } from 'react';

import { Form } from './Form';
import { Intro } from './Intro';
import { Pattern } from './Pattern';
import { Template } from './Template';

export const App: FunctionComponent = () => {
  const [templateDetails, setTemplateDetails] = useState({});

  return (
    <div className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
      <div className="relative max-w-xl mx-auto">
        <Pattern className="absolute left-full transform translate-x-1/2" />

        <Pattern className="absolute right-full bottom-0 transform -translate-x-1/2" />

        <Intro />

        {Object.keys(templateDetails).length > 0 ? (
          <Template />
        ) : (
          <Form onSubmit={setTemplateDetails} />
        )}
      </div>
    </div>
  );
};
