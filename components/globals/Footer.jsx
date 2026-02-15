"use client";
import React, { useRef } from "react";
import styles from "@/css/components/globals/Footer.module.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Footer = () => {
    const waveRef = useRef(null);
    const logoRef = useRef(null);
    const footerRef = useRef(null);

    useGSAP(() => {
        gsap.fromTo(
            logoRef.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
        );

        gsap.to(waveRef.current, {
            y: -35,
            duration: 6,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
        });
    }, { scope: footerRef });

    const scrollToSection = (id) => {
        const el = document.querySelector(id);
        if (!el) return;

        el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <footer ref={footerRef} className={styles.footer}>
            <div className={styles.svgWrap}>
                <svg
                    viewBox="0 0 1440 260"
                    preserveAspectRatio="none"
                    className={styles.svg}
                >
                    <path
                        ref={waveRef}
                        d="M0,120 C200,200 400,40 600,90 C800,140 1000,70 1200,110 C1350,140 1440,120 1440,120 L1440,0 L0,0 Z"
                        className={styles.shape}
                    />
                </svg>
            </div>

            <div className={styles.content}>
                <h1 ref={logoRef} className={styles.massiveLogo}>
                    KRIVOXX
                </h1>

                <div className={styles.links}>
                    <button onClick={() => scrollToSection("#home")}>Home</button>
                    <button onClick={() => scrollToSection("#services")}>Services</button>
                    <button onClick={() => scrollToSection("#contact")}>Contact</button>
                </div>

                <p className={styles.copy}>
                    Crafting digital presence with precision.
                </p>

                <div className={styles.contactLinks}>
                    <a href="tel:+919998813569">+91 99988 13569</a>
                    <a href="mailto:krivox9@gmail.com">krivox9@gmail.com</a>
                </div>

                <span className={styles.rights}>
                    © {new Date().getFullYear()} KRIVOXX
                </span>
            </div>
        </footer>
    );
};

export default Footer;