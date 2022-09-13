import { NavigationItemProps } from '../../navigation.types';

export const NavigationItem = ({
  name,
  icon,
  className,
}: NavigationItemProps) => {
  return (
    <div className={className}>
      {icon}
    </div>
  )
}
