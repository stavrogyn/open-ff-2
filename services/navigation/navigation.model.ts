import { createDomain } from "effector"
import { INITIAL_NAVIGATION_STATE } from "./consts"
import { NavigationItem } from "./navigation.types"


const navigationDomain = createDomain("navigation")

const $navigationItems = navigationDomain.createStore<NavigationItem[]>(INITIAL_NAVIGATION_STATE)

export const inputs = {

}

export const outputs = {
  $navigationItems
}
