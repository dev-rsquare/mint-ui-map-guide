import React, { DetailedHTMLProps, HTMLAttributes } from 'react';

import { Flex } from './Flex';

interface FrameProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {

}

export function Frame({ children, ...props }: FrameProps) {
  return (
    <Flex fPadding='10px' {...props}>
      <Flex style={{ padding: '30px', border: '1px solid var(--ifm-color-emphasis-300)' }}>
        {children}
      </Flex>
    </Flex>
  );
}