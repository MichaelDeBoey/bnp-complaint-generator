import type { FunctionComponent, PropsWithChildren } from 'react';

type Props = {
  href: string;
};
export const IconLink: FunctionComponent<PropsWithChildren<Props>> = ({
  children,
  href,
}) => (
  <a className="mr-5 block flex items-center hover:text-gray-700" href={href}>
    {children}
  </a>
);
