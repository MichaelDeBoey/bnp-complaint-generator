import React, {
  FunctionComponent,
  HTMLAttributes,
  InputHTMLAttributes,
} from 'react';

type Props = {
  description?: string;
  id: Required<InputHTMLAttributes<HTMLInputElement>>['id'];
  label: string;
  onValueChange: (newValue: string) => void;
  value: string;
} & Pick<HTMLAttributes<HTMLDivElement>, 'className'>;
export const FormInput: FunctionComponent<Props> = ({
  className,
  description,
  id,
  label,
  onValueChange,
  value,
}) => (
  <div className={className}>
    <label
      className="block text-sm font-medium leading-5 text-gray-700"
      htmlFor={id}
    >
      {label}
    </label>

    {description ? (
      <p className={`leading-6 text-gray-500 text-sm`}>{description}</p>
    ) : null}

    <div className="mt-1 relative rounded-md shadow-sm">
      <input
        className="form-input py-3 px-4 block w-full transition ease-in-out duration-150"
        id={id}
        onChange={({ target: { value } }) => onValueChange(value)}
        value={value}
      />
    </div>
  </div>
);
