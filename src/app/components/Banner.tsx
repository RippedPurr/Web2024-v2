import Image from "next/image";
import styles from "./Banner.module.css"

export default function Banner() {
  return (
    <main className={styles.main}>
      {/* Фоновый текст */}
      <h1 className={styles.bgTitle}>AQUARIM</h1>

      {/* Три колонки */}
      <div className={styles.columns}>
        {/* Левая колонка */}
        <div className={styles.leftColumn}>
          <h2 className={styles.columnTitle}>РЫБНЫЙ</h2>
          <p className={styles.text}>
            Откройте для себя мир изысканных вкусов
            с нашими рыбными деликатесами, приготовленными специально для вас
          </p>
          <button className={styles.button}>Меню</button>
        </div>

        {/* Средняя колонка */}
        <div className={styles.centerColumn}>
          <Image
            src="/fork.png"
            alt="Shrimp on fork"
            width={220}
            height={520}
            className={styles.image}
          />
        </div>

        {/* Правая колонка */}
        <div className={styles.rightColumn}>
          <h2 className={styles.columnTitle}>РЕСТОРАН</h2>
          <div className={styles.rightText}>
            <div className={styles.subcolumn}>
              <Image src="/Group.png" alt="fish" width={50} height={50}/><p> Свежая рыба из наших аквариумов — гарантированная свежесть</p>
            </div>
            
            
            <p><Image src="/Frame.png" alt="man" width={50} height={50}/> Качественная доставка, где горячие блюда сохраняют свой вкус</p>
          </div>
        </div>
      </div>
    </main>
  );
}
