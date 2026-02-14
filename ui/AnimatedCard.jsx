"use client";
import React from 'react';
import styles from '@/css/ui/AnimatedCard.module.css';
import Image from 'next/image';
import { useRef } from 'react';
import SplitText from 'gsap/src/SplitText';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const AnimatedCard = ({ img, title }) => {

    const titleRef = useRef(null);
    const splitRef = useRef(null);
    const stroke1Ref = useRef(null);
    const stroke2Ref = useRef(null);
    const containerRef = useRef(null);
    const { contextSafe } = useGSAP();
    const tlRef = useRef(null);
    // let tl = null;

    useGSAP(() => {

        if (!titleRef.current || !stroke1Ref.current || !stroke2Ref.current) return;

        splitRef.current = SplitText.create(titleRef.current, {
            type: "words",
            mask: "words"
        });

        gsap.set(splitRef.current.words, { yPercent: 100 });

        const cardPaths = [stroke1Ref.current, stroke2Ref.current];
        const tl = gsap.timeline({ paused: true });

        cardPaths.forEach((path) => {

            const length = path.getTotalLength();

            gsap.set(path, {
                strokeDasharray: length,
                strokeDashoffset: length
            });

            tl.to(path, {
                strokeDashoffset: 0,
                duration: 1.5,
                ease: "power2.out",
                attr: { "stroke-width": 700 }
            }, 0);

        });

        tl.to(splitRef.current.words, {
            yPercent: 0,
            stagger: 0.075,
            duration: 0.75,
            ease: "power3.out"
        }, 0.35);

        tlRef.current = tl;

        return () => splitRef.current?.revert();

    }, { scope: containerRef });

    const EnterAnimation = () => {
        tlRef.current?.play();
    };

    const LeaveAnimation = () => {
        tlRef.current?.reverse();
    };

    return (
        <div ref={containerRef} className={styles.card} onMouseEnter={EnterAnimation} onMouseLeave={LeaveAnimation}>
            <div className={styles.CardImage}>
                <Image src={img} alt='INdustry1' className={styles.img}></Image>
            </div>
            <div className={`${styles.stroke} ${styles.stroke1}`}>
                <svg width={2453} height={2273} viewBox='0 0 2453 2273' fill='none' xmlns='http://www.w3.org/2000/svg' className={styles.svg}>
                    <path ref={stroke1Ref} d='M227.549 1818.76C227.549 1818.76 406.016 2207.75 569.049 2130.26C843.431 1999.85 -264.104 1002.3 227.549 876.262C552.918 792.849 773.647 2456.11 1342.05 2130.26C1885.43 1818.76 14.9644 455.772 760.548 137.262C1342.05 -111.152 1663.5 2266.35 2209.55 1972.76C2755.6 1679.18 1536.63 384.467 1826.55 137.262C2013.5 -22.1463 2209.55 381.262 2209.55 381.262' stroke='#8a51fe' strokeWidth={200} strokeLinecap='round'></path>
                </svg>
            </div>
            <div className={`${styles.stroke} ${styles.stroke2}`}>
                <svg width={2250} height={2535} viewBox='0 0 2250 2535' fill='none' xmlns='http://www.w3.org/2000/svg' className={styles.svg}>
                    <path ref={stroke2Ref} d='M1661.28 2255.51C1661.28 2255.51 2311.09 1960.37 2111.78 1817.01C1944.47 1696.67 718.456 2870.17 499.781 2255.51C308.969 1719.17 2457.51 1613.83 2111.78 963.512C1766.05 313.198 427.949 2195.17 132.281 1455.51C-155.219 736.292 2014.78 891.514 1708.78 252.012C1437.81 -314.29 369.471 909.169 132.281 566.512C18.1772 401.672 244.781 193.012 244.781 193.012' stroke='#eee' strokeWidth={200} strokeLinecap='round'></path>
                </svg>
            </div>
            <div className={styles.cardTitle}>
                <h3 ref={titleRef}>{title}</h3>
            </div>
        </div>
    )
}

export default AnimatedCard
