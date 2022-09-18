import { ReactNode, Ref, SVGProps, ComponentType, RefAttributes } from 'react';

export type IconSvgProps = {
  svg: ReactNode;
  className?: string;
  ref: Ref<SVGSVGElement>
}

export type IconProps = SVGProps<SVGSVGElement> & IconSvgProps;

export type IconType = ComponentType<IconProps & RefAttributes<SVGSVGElement>>;
