import React from 'react';
import DefaultDocItem from '@theme-original/DocItem';
import type {Props} from '@theme/DocItem';
import NotFound from '@theme/NotFound';

export default function DocItemWrapper(props: Props) {
  const anyProps = props as any;
  const frontMatter =
    anyProps?.content?.frontMatter || anyProps?.content?.metadata?.frontMatter;

  if (frontMatter && frontMatter.hidden === true) {
    return <NotFound />;
  }

  return <DefaultDocItem {...props} />;
}


