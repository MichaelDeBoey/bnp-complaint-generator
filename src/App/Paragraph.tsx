import type {
  FunctionComponent,
  HTMLAttributes,
  PropsWithChildren,
} from 'react';

type Props = {
  fontSize?: 'small' | 'large';
} & Pick<HTMLAttributes<HTMLParagraphElement>, 'className'>;
export const Paragraph: FunctionComponent<PropsWithChildren<Props>> = ({
  children,
  className,
  fontSize = 'large',
}) => (
  <p
    className={`mt-4 leading-6 text-gray-500 ${
      fontSize === 'large' ? 'text-lg' : 'text-sm'
    } ${className ?? ''}`}
  >
    {children}
  </p>
);
