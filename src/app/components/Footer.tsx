import styles from "./Footer.module.css"
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.textcont}>
          <p className="text-sm">© 2018-2024 AQUARIM</p>
          <div className={styles.list}>
            <h3 className={styles.h3}>О РЕСТОРАНЕ</h3>
            <h5 className={styles.h5}>О шефе</h5>
            <h5 className={styles.h5}>Галерея</h5>
            <h5 className={styles.h5}>Новости</h5>
            <h5 className={styles.h5}>Команда</h5>
          </div>
            <div className={styles.list}>
            <h3 className={styles.h3}>ДЛЯ ПОСЕТИТЕЛЕЙ</h3>
            <h5 className={styles.h5}>Меню</h5>
            <h5 className={styles.h5}>Доставка и оплата</h5>
            <h5 className={styles.h5}>Отзывы</h5>
            <h5 className={styles.h5}>Контакты</h5>
          </div>
        </div>
        <h1 className={styles.bgTitle}>AQUARIM</h1>
        <div className={styles.textcont1}>
          <p className="text-sm ml-4">Политика обработки персональных данных</p>
          <p className="text-sm">Desing by @sssuttle</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;