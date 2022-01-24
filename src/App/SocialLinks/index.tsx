import type { FunctionComponent } from 'react';

import { ReactComponent as GitHubLogo } from './GitHub.svg';
import { IconLink } from './IconLink';
import { ReactComponent as TwitterLogo } from './Twitter.svg';

export const SocialLinks: FunctionComponent = () => (
  <div className="mt-8 flex justify-center border-t pt-8 text-gray-500">
    <IconLink href="https://github.com/MichaelDeBoey/bnp-complaint-generator">
      <GitHubLogo className="h-5 w-5 fill-current" />
    </IconLink>

    <IconLink href="https://twitter.com/MichaelDeBoey93">
      <TwitterLogo className="h-5 w-5 fill-current" />
    </IconLink>
  </div>
);
