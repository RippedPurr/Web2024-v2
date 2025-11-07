// components/Header.js
import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <Link href="/">АQUARIM</Link>
        </div>
        <ul className={styles.navList}>
          <li><Link href="/about">О ресторане</Link></li>
          <li><Link href="/menu">Меню</Link></li>
          <li><Link href="/delivery">Доставка и оплата</Link></li>
          <li><Link href="/contacts">Контакты</Link></li>
          <li><Link href="#"><img src="basket.png"></img></Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;