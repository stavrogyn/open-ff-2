import { memo, useRef } from "react";
import classNames from "classnames/bind";

import { Icon } from '&uikit/icon'

import { IconProps } from "../types";
import styles from './dice.module.scss';


const cx = classNames.bind(styles);

export const DiceIcon = memo(({ 
  className,
}: IconProps) => {
  const ref = useRef<SVGSVGElement>(null);

  return (
    <Icon ref={ref}>
      <svg className={cx(className, 'root')} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" height={40} width={40}>
        <path d="M8.674 21.88h10.643c1.908 0 2.892-.983 2.892-2.864V8.319c0-1.88-.984-2.865-2.892-2.865H8.674c-1.899 0-2.892.976-2.892 2.865v10.697c0 1.88.993 2.865 2.892 2.865Zm9.299-10.713c-.818-.009-1.494-.66-1.494-1.477a1.49 1.49 0 0 1 1.494-1.476c.8 0 1.467.659 1.467 1.476 0 .827-.668 1.503-1.467 1.477ZM14 15.148a1.476 1.476 0 0 1-1.468-1.494c0-.808.65-1.459 1.468-1.459.8 0 1.468.65 1.468 1.46 0 .825-.66 1.493-1.468 1.493Zm-3.964 3.973a1.482 1.482 0 0 1-1.476-1.485c0-.818.659-1.468 1.476-1.468.8 0 1.468.65 1.468 1.468a1.48 1.48 0 0 1-1.468 1.485Z"></path></svg>
    </Icon>
  )
});

DiceIcon.displayName = 'DiceIcon';
