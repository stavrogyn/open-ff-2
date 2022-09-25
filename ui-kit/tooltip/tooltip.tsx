import React, { memo, forwardRef, Ref } from 'react';
import classNames from 'classnames/bind';

import { TooltipTypeProps } from './types';
import styles from './tooltip.module.scss';

const cx = classNames.bind(styles);

export const Tooltip = memo(forwardRef(({
  text,
  children,
  className,
  tooltipClassName,
}: TooltipTypeProps, ref: Ref<HTMLDivElement>) => {
  return (
    <div className={cx(className, 'root')} ref={ref}>
      <div className={cx(tooltipClassName, 'text')}>{text}</div>
      {children}
    </div>
  );
}))

Tooltip.displayName = 'Tooltip'
