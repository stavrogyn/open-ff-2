import React from "react";

export enum NavigationItemIconType {
  Guest = "Guest",
  Random = "Random",
  List = "List",
  Search = "Search",
}

export type NavigationItem = {
  title: string,
  color: string,
  icon: NavigationItemIconType,
}
