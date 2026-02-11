"use client";
import { useRouter } from "next/navigation";
import { useTransition } from "@/context/TransitionContext";

export default function Transmit({ href, children, ...props }) {
    const router = useRouter();
    const { setActive, waitForRoute, waitForModel } = useTransition();

    const handleClick = async () => {
        setActive(true);
        router.push(href);

        await Promise.all([
            new Promise(res => setTimeout(res, 2000)),
            waitForRoute(),
            waitForModel(),
        ]);

        setActive(false);
    };

    return <div onClick={handleClick} {...props}>{children}</div>;
}