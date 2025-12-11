import Image from "next/image";
import styles from './FoodSlider.module.css';


const FoodSlider2 = () => {
    return(
    <section className={styles.FoodSlider}>
     <div className={styles.subcolumn}>
          <h6>АКЦИИ</h6><h2 className={styles.title}>ОАЗИС ВЫГОДНЫХ ПРЕДЛОЖЕНИЙ</h2>
        </div>
        <div className={styles.card}>
            <div className={styles.subcolumn}>
                <div className={styles.textcont}>
                        <h2 className={styles.h2}>СКИДКА 15% НА ПЕРВЫЙ ЗАКАЗ</h2>
                    <h3 className={styles.h3}>Воспользуйтесь этой прекрасной возможностью и откройте для себя мир изысканных морских деликатесов, которыми славится наш ресторан</h3>
                
                <button className={styles.button}>Забрать скидку</button>
                </div>
                <div className={styles.subcolumn}>
                <Image src="/plate.png"
                    alt="Plate"
                    width={520}
                    height={520}
                    className={styles.image}
                    />
          </div>
            </div>
        </div>
        </section>
        )
};

export default FoodSlider2;