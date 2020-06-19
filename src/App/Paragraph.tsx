import React, { FunctionComponent, HTMLAttributes } from 'react';

type Props = Pick<HTMLAttributes<HTMLParagraphElement>, 'className'>;
export const Paragraph: FunctionComponent<Props> = ({
  children,
  className,
}) => (
  <p className={`mt-4 text-lg leading-6 text-gray-500 ${className ?? ''}`}>
    {children}
  </p>
);
