import { FooterProps } from './footer.types';
import styles from './footer.module.scss';

export const Footer = ({
  className,
}: FooterProps) => {
  return (
    <div className={styles.container}>
      <h1>Footer</h1>
    </div>
  )
}
