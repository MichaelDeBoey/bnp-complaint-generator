import React, { FunctionComponent, useState } from 'react';

import { FormInput } from './FormInput';

const noop = () => undefined;

type Props = {
  onSubmit: (details: {
    clientId: string;
    firstName: string;
    lastName: string;
  }) => void;
};
export const Form: FunctionComponent<Props> = ({ onSubmit }) => {
  const [clientId, setClientId] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const enableSubmitButton =
    Boolean(firstName) && Boolean(lastName) && Boolean(clientId);

  const onGenerateTemplate = () => onSubmit({ clientId, firstName, lastName });

  return (
    <div className="mt-12 grid grid-cols-1 row-gap-6 sm:grid-cols-2 sm:col-gap-8">
      <FormInput
        id="first_name"
        label="First name"
        onValueChange={setFirstName}
        value={firstName}
      />

      <FormInput
        id="last_name"
        label="Last name"
        onValueChange={setLastName}
        value={lastName}
      />

      <FormInput
        className="sm:col-span-2"
        id="client_id"
        label="Client ID (available on your bank card)"
        onValueChange={setClientId}
        value={clientId}
      />

      <div className="sm:col-span-2">
        <span className="w-full inline-flex rounded-md shadow-sm">
          <button
            type="button"
            className={`${
              enableSubmitButton
                ? 'bg-indigo-600 cursor-pointer'
                : 'bg-indigo-500 cursor-not-allowed'
            } w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150`}
            onClick={enableSubmitButton ? onGenerateTemplate : noop}
          >
            <span role="img" aria-label="gear">
              ⚙️
            </span>{' '}
            Generate template
          </button>
        </span>
      </div>
    </div>
  );
};
