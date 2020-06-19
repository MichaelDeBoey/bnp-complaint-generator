import React, { FunctionComponent } from 'react';

import { FormInput } from './FormInput';
import { Intro } from './Intro';
import { Pattern } from './Pattern';

export const App: FunctionComponent = () => {
  return (
    <div className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
      <div className="relative max-w-xl mx-auto">
        <Pattern className="absolute left-full transform translate-x-1/2" />

        <Pattern className="absolute right-full bottom-0 transform -translate-x-1/2" />

        <Intro />

        <div className="mt-12 grid grid-cols-1 row-gap-6 sm:grid-cols-2 sm:col-gap-8">
          <FormInput id="first_name" label="First name" />

          <FormInput id="last_name" label="Last name" />

          <FormInput
            className="sm:col-span-2"
            id="client_id"
            label="Client ID (available on your bank card)"
          />

          <div className="sm:col-span-2">
            <span className="w-full inline-flex rounded-md shadow-sm">
              <button
                type="button"
                disabled
                className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
              >
                ⚙️ Generate template
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
