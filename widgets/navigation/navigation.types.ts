import React from "react";

export type NavigationItemProps = {
  name: string;
  icon: React.ReactNode;
  className?: string;
}

export type NavigationContainerProps = {
  items: NavigationItemProps[];
}
