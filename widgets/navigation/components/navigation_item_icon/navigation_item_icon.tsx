import { NavigationItemIconType } from "../../../../services/navigation/navigation.types"
import { NavigationItemIconProps } from "../../navigation.types"

export const NavigationItemIcon = ({
  icon
}: NavigationItemIconProps) => {

  if (icon === NavigationItemIconType.Guest) {
    return null
  }

  if (icon === NavigationItemIconType.Random) {
    return null
  }

  if (icon === NavigationItemIconType.List) {
    return null
  }

  if (icon === NavigationItemIconType.Search) {
    return null
  }

  return null
}
