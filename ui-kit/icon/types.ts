import { ReactNode, Ref, SVGProps, ComponentType, RefAttributes } from 'react';

export type IconSvgProps = {
  ref: Ref<SVGSVGElement>
  svg?: ReactNode;
  className?: string;
}

export type IconProps = SVGProps<SVGSVGElement> & {
  ref: Ref<SVGSVGElement>
  className?: string;
  children?: ReactNode;
};

export type IconType = ComponentType<IconProps & RefAttributes<SVGSVGElement>>;
