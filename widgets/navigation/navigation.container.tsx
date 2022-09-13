import React, { useMemo } from 'react';

import { NavigationItem } from './components';
import { NavigationContainerProps } from './navigation.types'
import styles from './navigation.module.scss';

export const NavigationContainer = ({
  items,
}: NavigationContainerProps) => {
  const navigationItems = useMemo(() => items.map((item) => {
    return (
      <NavigationItem
        key={item.title}
        name={item.title}
        icon={<NavigationItemIcon icon={item.icon} />}
      />
    )
  }), [items]);

  return (
    <div className={styles.container}>
      {navigationItems}
    </div>
  )
}
