"use client";

import useSmoothScroll from "@/hooks/SmoothScroler";

export default function SmoothScrollProvider({ children }) {
    useSmoothScroll();
    return children;
}