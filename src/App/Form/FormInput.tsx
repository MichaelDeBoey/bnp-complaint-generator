import type {
  FunctionComponent,
  HTMLAttributes,
  InputHTMLAttributes,
} from 'react';

type InputType = InputHTMLAttributes<HTMLInputElement>;
type Props = {
  description?: string;
  label: string;
  onValueChange: (newValue: string) => void;
  value: string;
} & Pick<HTMLAttributes<HTMLDivElement>, 'className'> &
  Pick<Required<InputType>, 'id'> &
  Pick<InputType, 'placeholder'>;
export const FormInput: FunctionComponent<Props> = ({
  className,
  description,
  id,
  label,
  onValueChange,
  placeholder,
  value,
}) => (
  <div className={className}>
    <label className="block text-sm font-medium text-gray-700" htmlFor={id}>
      {label}
    </label>

    {description ? (
      <p className={`text-sm leading-6 text-gray-500`}>{description}</p>
    ) : null}

    <div className="mt-1">
      <input
        className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        id={id}
        onChange={({ target: { value } }) => onValueChange(value)}
        placeholder={placeholder}
        type="text"
        value={value}
      />
    </div>
  </div>
);
