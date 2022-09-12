import { ContentProps } from './content.types'

export const Content = ({
  className,
  children,
}: ContentProps) => {
  return (
    <div className={className}>
      {'some text'}
      <div>
        {children}
      </div>
    </div>
  )
}
