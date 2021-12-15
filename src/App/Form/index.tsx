import type { FunctionComponent } from 'react';
import { useState } from 'react';

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

  const onGenerateTemplate = () => {
    fetch('/.netlify/functions/trackTemplateGeneration');

    onSubmit({ clientId, firstName, lastName });
  };

  return (
    <div className="mt-12 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
      <FormInput
        id="first_name"
        label="First name"
        onValueChange={setFirstName}
        placeholder="John"
        value={firstName}
      />

      <FormInput
        id="last_name"
        label="Last name"
        onValueChange={setLastName}
        placeholder="Appleseed"
        value={lastName}
      />

      <FormInput
        className="sm:col-span-2"
        description="I only need this to fill in the template, pinky promise! If you don't trust me, fill in whatever you want and change it later."
        id="client_id"
        label="Client ID (available on your bank card)"
        onValueChange={setClientId}
        placeholder="12345 67890"
        value={clientId}
      />

      <div className="sm:col-span-2">
        <button
          type="submit"
          className={`${
            enableSubmitButton
              ? 'bg-indigo-600 cursor-pointer'
              : 'bg-indigo-500 cursor-not-allowed'
          } gap-x-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
          onClick={enableSubmitButton ? onGenerateTemplate : noop}
        >
          <span role="img" aria-label="gear">
            ⚙️
          </span>

          <span>Generate template</span>
        </button>
      </div>
    </div>
  );
};
