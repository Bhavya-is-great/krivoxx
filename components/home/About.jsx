"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/src/SplitText";
import { useGSAP } from "@gsap/react";
import styles from "@/css/components/home/About.module.css";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function AboutStory() {
    const container = useRef(null);
    const linesRef = useRef([]);

    useGSAP(() => {
        if (!linesRef.current.length) return;

        const splitInstances = linesRef.current.map(
            (line) => new SplitText(line, { type: "words" })
        );

        const words = splitInstances.flatMap(split => split.words);

        words.forEach(word => {
            const cleanWord = word.textContent.replace(/[.,—]/g, "");

            if (
                cleanWord === "KRIVOXX" ||
                cleanWord === "incredible" ||
                cleanWord === "Everything"
            ) {
                word.classList.add(styles.highlightWord);
            }
        });

        gsap.set(words, { y: 60, opacity: 0 });

        gsap.to(words, {
            y: 0,
            opacity: 1,
            stagger: 0.02,
            ease: "power2.out",
            scrollTrigger: {
                trigger: container.current,
                start: "top 80%",
                end: "top 5%",
                scrub: true,
                toggleActions: "play none none reverse",
            },
        });

        return () => {
            splitInstances.forEach(split => split.revert());
        };
    }, { scope: container });

    return (
        <>
            <h1 className={styles.head}>A Story that Created <span className={styles.color}>KRIVOXX</span></h1>
            <section ref={container} className={styles.story}>
                <div className={styles.inner}>
                    {[
                        "KRIVOXX was born from a simple observation — local businesses had incredible potential.",
                        "But they struggled with multiple vendors, disconnected systems, and inefficient workflows.",
                        "That's why we created KRIVOXX — bringing everything together under one roof.",
                        "From your first website to advanced automation, we handle it all.",
                        "Everything your business needs. One place."
                    ].map((text, i) => (
                        <p
                            key={i}
                            ref={(el) => (linesRef.current[i] = el)}
                            className={styles.line}
                        >
                            {text}
                        </p>
                    ))}
                </div>
            </section>
        </>
    );
}