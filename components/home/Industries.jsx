"use client";
import React from 'react';
import styles from '@/css/components/home/Industries.module.css';
import Image from 'next/image';
import indus1 from '@/assets/images/indus1.png';
import indus2 from '@/assets/images/indus2.png';
import indus3 from '@/assets/images/indus3.png';
import indus4 from '@/assets/images/indus4.png';
import SplitText from 'gsap/src/SplitText';
import AnimatedCard from '@/ui/AnimatedCard';

const Industries = () => {

  const cards = [
    {
      img: indus1,
      title: "Education",
    },
    {
      img: indus2,
      title: "Logistics",
    },
    {
      img: indus3,
      title: "Manufacturing",
    },
    {
      img: indus4,
      title: "Ecommerece",
    }
  ]

  return (
    <section id='industries' className={styles.indusstries}>
      <h1 className={styles.head}><span className={styles.color}>Where</span> we can Help you?</h1>
      <p className={styles.subHead}>The answer is Wherever you need</p>

      <div className={styles.row}>
        {
          cards.map((card, i) => {
            return (
              <AnimatedCard key={i} img={card.img} title={card.title} />
            )
          })
        }
      </div>
      <div className={styles.text}>And many more.
        Honestly, <span className={styles.color}>too many</span> to list.
        Different industries, same <span className={styles.color}>obsession</span> with impact.</div>
    </section>
  )
}

export default Industries
