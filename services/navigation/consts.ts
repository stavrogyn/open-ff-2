import { NavigationItem, NavigationItemIconType } from "./navigation.types";

export const INITIAL_NAVIGATION_STATE: NavigationItem[] = [{
  title: 'Guest Lectures',
  icon: NavigationItemIconType.Guest,
  color: '#FF0000',
}, {
  title: 'Random Lectures',
  icon: NavigationItemIconType.Random,
  color: '#FF00AA',
}, {
  title: 'View as List',
  icon: NavigationItemIconType.List,
  color: '#FFBB00',
}, {
  title: 'Search',
  icon: NavigationItemIconType.Search,
  color: '#FFAABB',
}]
