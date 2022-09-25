import { useRef } from 'react';

import classNames from "classnames/bind";

import { Tooltip } from '&uikit';

import { NavigationItemIcon } from "../navigation_item_icon";
import { NavigationItemProps } from '../../navigation.types';


import styles from './navigation_item.module.scss';


const cx = classNames.bind(styles);

export const NavigationItem = ({
  name,
  type,
  className,
}: NavigationItemProps) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div className={cx(className, 'root', type)}>
      <Tooltip ref={ref}>
        <NavigationItemIcon type={type} />
      </Tooltip>
    </div>
  )
}
