import React, { DetailedHTMLProps, HTMLAttributes } from 'react';

interface FlexProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  row?:boolean;
  fAlign?:'center'|'left'|'right'|'between';
  fPadding?:string;
  fGap?:string;
  fSize?:string;
}
export function Flex({
  row,
  fAlign,
  fPadding,
  fGap,
  fSize,
  children,
  style,
  ...props
}:FlexProps) {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flex: fSize ? `0 0 ${fSize}` : '1 1 auto',
        flexDirection: row ? 'row' : 'column',
        justifyContent: getJustifyContent(row, fAlign),
        alignItems: getAlignItems(row, fAlign),
        padding: fPadding,
        gap: fGap,
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
}

function getJustifyContent(row?:boolean, fAlign?:FlexProps['fAlign']) {
  if (fAlign === 'center') {
    return 'center';
  }
  if (row) {
    if (fAlign === 'right') {
      return 'flex-end';
    }
    if (fAlign === 'between') {
      return 'space-between';
    }
  }
  return 'flex-start';
}

function getAlignItems(row?:boolean, fAlign?:FlexProps['fAlign']) {
  if (fAlign === 'center') {
    return 'center';
  }
  if (!row) {
    if (fAlign === 'right') {
      return 'flex-end';
    }
    if (fAlign === 'between') {
      return 'space-between';
    }
  }
  return 'flex-start';
}