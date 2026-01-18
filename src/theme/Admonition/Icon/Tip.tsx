import React, {type ReactNode} from 'react';
import Tip from '@theme-original/Admonition/Icon/Tip';
import type TipType from '@theme/Admonition/Icon/Tip';
import type {WrapperProps} from '@docusaurus/types';

type Props = WrapperProps<typeof TipType>;

export default function TipWrapper(props: Props): ReactNode {
  return (
    <>
      <Tip {...props} />
    </>
  );
}
