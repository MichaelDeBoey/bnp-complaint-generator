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
      <p className={`leading-6 text-gray-500 text-sm`}>{description}</p>
    ) : null}

    <div className="mt-1">
      <input
        className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
        id={id}
        onChange={({ target: { value } }) => onValueChange(value)}
        placeholder={placeholder}
        type="text"
        value={value}
      />
    </div>
  </div>
);
