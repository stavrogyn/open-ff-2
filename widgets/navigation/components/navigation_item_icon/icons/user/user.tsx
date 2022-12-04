import { memo, useRef } from "react";
import classNames from "classnames/bind";

import { Icon } from 'shared/ui-kit/icon'

import styles from './user.module.scss';
import { IconProps } from "../types";


const cx = classNames.bind(styles);

export const UserIcon = memo(({
  className,
}: IconProps) => {
  const ref = useRef<SVGSVGElement>(null);

  return (
    <Icon ref={ref}>
      <svg className={cx(className, 'root')} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" height={40} width={40}>
        <path d="M14.009 13.575c1.916 0 3.542-1.705 3.542-3.91 0-2.154-1.635-3.807-3.542-3.807-1.916 0-3.56 1.68-3.551 3.824 0 2.188 1.626 3.893 3.55 3.893ZM8.524 21.75h10.952c1.45 0 1.95-.44 1.95-1.248 0-2.259-2.864-5.37-7.426-5.37-4.553 0-7.427 3.111-7.427 5.37 0 .809.501 1.248 1.951 1.248Z"></path>
      </svg>
    </Icon>
  )
});

UserIcon.displayName = 'UserIcon';
