"use client";
import React, { useState } from 'react';
import styles from '@/css/components/globals/Navbar.module.css';
import Image from 'next/image';
import logo from '@/assets/images/logo.png';
import { usePathname } from 'next/navigation';

const Navbar = () => {

    const currentPage = usePathname();
    const [open, setOpen] = useState(false);

    const Pages = [
        {
            name: "Home",
            page: "/"
        },
        {
            name: "Services",
            page: "/services"
        },
        {
            name: "Industries",
            page: "/industries"
        },
        {
            name: "About",
            page: "/about"
        },
        {
            name: "Contact",
            page: "/contact"
        },
    ];

    return (
        <nav className={styles.nav}>
            <div className={styles.brand}>
                <Image src={logo} alt='KRIVOXX logo' className={styles.logo}></Image>
                <p className={styles.brandName}><span className={styles.brandSpan}>KRI</span>VOXX</p>
            </div>
            <div className={`${styles.second} ${open ? styles.open : ""}`}>
                <ul className={styles.pages}>
                    {
                        Pages.map((route, i) => {
                            return (
                                <li className={`${styles.page} ${route.page == currentPage ? styles.active : ""}`} key={i}>
                                    <a href="#">
                                        <span> {route.name} </span>
                                        <span> {route.name} </span>
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
                <button className={styles.getStarted}>Get Started</button>
            </div>

            <div className={`${styles.hamburger} ${open ? styles.open : ""}`} onClick={() => {setOpen(!open)}}>
                <span className={styles.line}></span>
                <span className={styles.line}></span>
                <span className={styles.line}></span>
            </div>
        </nav>
    )
}

export default Navbar
