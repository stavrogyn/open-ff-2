import { NavigationItem, NavigationItemIconType } from "../../features/navigation/navigation.types";

export type NavigationItemProps = {
  name: string;
  type: NavigationItemIconType;
  className?: string;
}

export type NavigationContainerProps = {
  items: NavigationItem[];
}

export type NavigationItemIconProps = {
  type: NavigationItemIconType
}
