"use client";
import React from 'react';
import styles from '@/css/components/home/Hero.module.css';
import Image from 'next/image';
import handShake from '@/assets/images/heroimg.png'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

const Hero = () => {

    const { contextSafe } = useGSAP();

    useGSAP(() => {
        gsap.from(`.${styles.middle} span`, {
            y: 200,
            duration: 1,
            stagger: 0.05,
            ease: "power3.out"
        });

        gsap.from(`.${styles.cta}`, {
            y: 40,
            opacity: 0,
            duration: 0.8,
            delay: 0.5,
            ease: "power3.out"
        });
    });

    const animateEnter = contextSafe(() => {
        gsap.to(`.${styles.cta}`, {
            y: -5,
        });
    })

    const animateLeave = contextSafe(() => {
        gsap.to(`.${styles.cta}`, {
            y: 5,
        });
    })

    return (
        <section id='Hero' className={styles.hero}>
            <div className={styles.gradient}></div>
            <div className={styles.small}>
                You Contact. We Build. You Grow.
            </div>
            <div className={styles.middle}>
                <span>We</span> <span>Don't</span> <span>Chase</span> <span className={styles.color}>Trend</span><span>.</span>
            </div>
            <div className={styles.middle}>
                <span>We</span> <span>Create</span> <span className={styles.color}>Our</span> <span>Own</span><span>.</span>
            </div>
            <button className={styles.cta} onMouseEnter={animateEnter} onMouseLeave={animateLeave}>
                Strat Dominating
            </button>
            <Image src={handShake} alt='HnadShake' className={styles.handShake}></Image>
        </section>
    )
}

export default Hero
