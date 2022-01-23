import Link from 'next/link'
import styles from './sidebar.module.css'

export default function Sidebar() {
  return (
    <nav className={styles.nav}>
      {/* <input className={styles.input} placeholder="Search..." /> */}
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/privacy-policy">
        <a>Privacy Policy</a>
      </Link>
      <Link href="/contact">
        <a>Contact</a>
      </Link>
    </nav>
  )
}
