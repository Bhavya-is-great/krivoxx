"use client";
import React, { useEffect, useRef } from "react";
import styles from "@/css/components/global/Footer.module.css";
import gsap from "gsap";

const Footer = () => {
    const shapeRef = useRef(null);

    useEffect(() => {
        gsap.to(shapeRef.current, {
            y: 18,
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
        });
    }, []);

    return (
        <footer className={styles.footer}>
            <div className={styles.svgWrap}>
                <svg
                    ref={shapeRef}
                    viewBox="0 0 1440 160"
                    preserveAspectRatio="none"
                    className={styles.svg}
                >
                    <path
                        d="M0,60 C180,120 360,0 540,40 C720,80 900,20 1080,50 C1260,80 1380,40 1440,60 L1440,0 L0,0 Z"
                        className={styles.shape}
                    />
                </svg>
            </div>

            <div className={styles.content}>
                <h2 className={styles.logo}>KRIVOXX</h2>

                <div className={styles.links}>
                    <a href="#home">Home</a>
                    <a href="#services">Services</a>
                    <a href="#contact">Contact</a>
                </div>

                <p className={styles.copy}>
                    Crafting digital presence with precision.
                </p>

                <span className={styles.rights}>
                    © {new Date().getFullYear()} KRIVOXX. All rights reserved.
                </span>
            </div>
        </footer>
    );
};

export default Footer;