import React from 'react';
import styles from './AboutSection.module.css';

const AboutSection = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>История рыбного искусства</h2>
        <p className={styles.text}>
          Наша история началась с мечты о создании места, где каждый может насладиться непревзойденным вкусом свежей рыбы прямо у себя дома. Мы поставили перед собой задачу предложить нечто большее, чем просто блюда из рыбы - мы хотели подарить вам настоящее морское путешествие.
          <br />
          Мы - это место, где каждая деталь имеет значение.
        </p>
        <button className={styles.button}>Узнать больше</button>
      </div>
      <div className={styles.imageContainer}>
        <img className={styles.image} src="./chef.png" alt="Шеф-повар" />
      </div>  
    </section>
  );
};

export default AboutSection;