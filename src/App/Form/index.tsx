import React, { FunctionComponent } from 'react';

import { FormInput } from './FormInput';

export const Form: FunctionComponent = () => {
  return (
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
  );
};
