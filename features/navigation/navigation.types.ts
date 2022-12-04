import React from "react";

export enum NavigationItemIconType {
  Guest = "guest",
  Random = "random",
  List = "list",
  Search = "search",
}

export type NavigationItem = {
  title: string,
  color: string,
  icon: NavigationItemIconType,
}
