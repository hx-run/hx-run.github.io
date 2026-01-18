import React, {type ReactNode} from 'react';
import Note from '@theme-original/Admonition/Type/Note';
import type NoteType from '@theme/Admonition/Type/Note';
import type {WrapperProps} from '@docusaurus/types';

type Props = WrapperProps<typeof NoteType>;

export default function NoteWrapper(props: Props): ReactNode {
  return (
    <>
      <Note {...props} />
    </>
  );
}
