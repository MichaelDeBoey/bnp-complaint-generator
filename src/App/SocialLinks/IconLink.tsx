import { FunctionComponent } from 'react';

type Props = {
  href: string;
};
export const IconLink: FunctionComponent<Props> = ({ children, href }) => (
  <a className="block flex items-center hover:text-gray-700 mr-5" href={href}>
    {children}
  </a>
);
