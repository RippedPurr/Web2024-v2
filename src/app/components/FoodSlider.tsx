import Image from "next/image";
import styles from './FoodSlider.module.css';


const FoodSlider = () => {
    return(
    <section className={styles.FoodSlider}>
     <div className={styles.subcolumn}>
          <h6>МЕНЮ</h6><h2 className={styles.title}>БЛЮДА, КОТОРЫЕ НАВСЕГДА
             ЗАПОМНЯТСЯ ВАМ</h2>
        </div>
        <div className={styles.card}>
            <div className={styles.subcolumn}>
                <div className={styles.textcont}>
                    <h2 className={styles.h2}>МОРСКОЙ БРИЗ</h2>
                    <h3 className={styles.h3}>Тарелка морепродуктов, включающая сочные кусочки краба, ароматные креветки и нежные мидии, подается с фирменным соусом и свежими зелеными травами.</h3>
                <div className={styles.subcolumn1}>
                <h3>1300 рублей</h3>
                <h6 className='font-weight lighter'>150 г</h6>
                </div>
                <button className={styles.button}>В корзину</button>
                </div>
                <div className={styles.subcolumn}>
                <Image src="/bowl.png"
                    alt="Bowl"
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

export default FoodSlider;