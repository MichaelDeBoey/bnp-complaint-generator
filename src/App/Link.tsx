import React, { FunctionComponent } from 'react';

type Props = {
  href: string;
};
export const Link: FunctionComponent<Props> = ({ children, href }) => (
  <a href={href} className="font-medium text-gray-700 underline">
    {children}
  </a>
);
