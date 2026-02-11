"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useTransition } from "@/context/TransitionContext";

export default function RouteWatcher() {
    const pathname = usePathname();
    const { resolveRoute, resolveModel } = useTransition();

    useEffect(() => {
        resolveRoute();
        resolveModel();
    }, [pathname]);

    return null;
}