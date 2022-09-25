import { memo, useRef } from "react";
import classNames from "classnames/bind";

import { Icon } from '&uikit/icon'

import styles from './list.module.scss';
import { IconProps } from "../types";


const cx = classNames.bind(styles);

export const ListIcon = memo(({
  className,
}: IconProps) => {
  const ref = useRef<SVGSVGElement>(null);

  return (
    <Icon ref={ref}>
      <svg viewBox="0 0 28 28" className={cx(className, 'root')} xmlns="http://www.w3.org/2000/svg" height={40} width={40}><path d="M5.817 9.945h16.366a.833.833 0 0 0 .826-.835.825.825 0 0 0-.826-.826H5.817a.82.82 0 0 0-.826.826c0 .457.37.835.826.835Zm1.82 4.544h12.761a.833.833 0 0 0 .827-.835.822.822 0 0 0-.827-.835H7.637a.827.827 0 0 0-.826.835c0 .448.369.835.826.835Zm1.784 4.535h9.193a.827.827 0 0 0 .826-.835.82.82 0 0 0-.826-.826H9.421a.82.82 0 0 0-.826.826c0 .457.36.835.826.835Z"></path></svg>
    </Icon>
  )
});

ListIcon.displayName = 'ListIcon';
