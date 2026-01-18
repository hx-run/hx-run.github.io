import React, {type ReactNode} from 'react';
import Details from '@theme-original/Details';
import type DetailsType from '@theme/Details';
import type {WrapperProps} from '@docusaurus/types';

type Props = WrapperProps<typeof DetailsType>;

export default function DetailsWrapper(props: Props): ReactNode {
  return (
    <>
      <Details {...props} />
    </>
  );
}
