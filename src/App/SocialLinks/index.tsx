import React, { FunctionComponent } from 'react';

import { ReactComponent as GitHubLogo } from './GitHub.svg';
import { IconLink } from './IconLink';
import { ReactComponent as TwitterLogo } from './Twitter.svg';

export const SocialLinks: FunctionComponent = () => (
  <div className="border-t mt-8 pt-8 flex justify-center text-gray-500">
    <IconLink href="https://github.com/MichaelDeBoey/bnp-complaint-generator">
      <GitHubLogo className="fill-current w-5 h-5" />
    </IconLink>

    <IconLink href="https://twitter.com/MichaelDeBoey93">
      <TwitterLogo className="fill-current w-5 h-5" />
    </IconLink>
  </div>
);
