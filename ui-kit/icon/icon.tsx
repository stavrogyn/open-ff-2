import React, { memo, forwardRef, Ref } from 'react';

import { IconSvgProps, IconProps, IconType } from './types';


const IconSvg = ({ svg, className, ref }: IconSvgProps) => {
  return React.createElement(
    'div',
    {
      className,
      ref
    },
    svg,
  );
}

export const Icon: IconType = memo(forwardRef(({
  className,
  children,
}: IconProps, ref: Ref<SVGSVGElement>) => {
  return (
    <IconSvg
      className={className}
      svg={children}
      ref={ref}
    />
  );
}));

Icon.displayName = 'Icon';
