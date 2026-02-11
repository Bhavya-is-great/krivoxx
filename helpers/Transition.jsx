"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useTransition } from "@/context/TransitionContext";

export default function Transition() {
    const { active } = useTransition();
    const ref = useRef(null);
    const firstRun = useRef(true);

    useEffect(() => {
        if (!ref.current) return;

        if (firstRun.current) {
            gsap.set(ref.current, { y: "100%" });
            firstRun.current = false;
            return;
        }

        gsap.to(ref.current, {
            y: active ? "0%" : "-100%",
            duration: 0.8,
            ease: "power3.inOut",
        });
    }, [active]);

    return (
        <div
            ref={ref}
            style={{
                position: "fixed",
                inset: 0,
                background: "#000",
                transform: "translateY(100%)",
                zIndex: 9999,
            }}
        />
    );
}