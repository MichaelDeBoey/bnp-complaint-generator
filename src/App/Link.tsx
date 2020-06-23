import React, { AnchorHTMLAttributes, FunctionComponent } from 'react';

type AnchorType = AnchorHTMLAttributes<HTMLAnchorElement>;
type Props = Required<Pick<AnchorType, 'href'>> & Pick<AnchorType, 'onClick'>;
export const Link: FunctionComponent<Props> = ({ children, href, onClick }) => (
  <a
    className="font-medium text-gray-700 underline"
    href={href}
    onClick={onClick}
  >
    {children}
  </a>
);
