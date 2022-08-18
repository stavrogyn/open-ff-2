import { NavbarProps } from './navbar.types'
import styles from './navbar.module.scss'

export const Navbar = ({
  className,
}: NavbarProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <div className={styles.item}>
          What’s On
        </div>
        <div className={styles.item}>
          Visit
        </div>
        <div className={styles.item}>
          Explore
        </div>
        <div className={styles.item}>
          Classes
        </div>
        <div className={styles.item}>
          Support
        </div>
        <div className={styles.item}>
          About
        </div>
      </div>
      <div className={styles.search}>
        <input type="text" placeholder="Search MAMA" />
      </div>
    </div>
  )
}
