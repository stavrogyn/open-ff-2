import React from "react";
import { NavigationItem, NavigationItemIconType } from "../../services/navigation/navigation.types";

export type NavigationItemProps = {
  name: string;
  icon?: React.ReactNode;
  className?: string;
}

export type NavigationContainerProps = {
  items: NavigationItem[];
}

export type NavigationItemIconProps = {
  icon: NavigationItemIconType
}
