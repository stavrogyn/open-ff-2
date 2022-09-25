import { NavigationItemIconType } from "../../../../services/navigation/navigation.types"
import { NavigationItemIconProps } from "../../navigation.types"
import { DiceIcon } from "./icons/dice"
import { GlassIcon } from "./icons/glass"
import { ListIcon } from "./icons/list"
import { UserIcon } from "./icons/user"

export const NavigationItemIcon = ({
  type
}: NavigationItemIconProps) => {

  if (type === NavigationItemIconType.Guest) {
    return <UserIcon />
  }

  if (type === NavigationItemIconType.Random) {
    return <DiceIcon />
  }

  if (type === NavigationItemIconType.List) {
    return <ListIcon />
  }

  if (type === NavigationItemIconType.Search) {
    return <GlassIcon />
  }

  return null
}
