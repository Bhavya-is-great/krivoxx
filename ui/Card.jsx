import React from "react";
import styles from "@/css/ui/Card.module.css";

const Cards = ({
  icon,
  title,
  subtitle,
  description,
  services = [],
  moreText,
  buttonText = "Explore Services",
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <div className={styles.icon}>{icon}</div>
        <div className={styles.badge}>{services.length} Services</div>
      </div>

      <div className={styles.textBlock}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>

      <p className={styles.description}>{description}</p>

      <ul className={styles.list}>
        {services.map((item, index) => (
          <li key={index}>
            <span className={styles.dot}></span>
            {item}
          </li>
        ))}
        {moreText && <li className={styles.more}>{moreText}</li>}
      </ul>

      <button className={styles.button}>
        {buttonText}
        <span className={styles.arrow}>→</span>
      </button>
    </div>
  );
};

export default Cards;