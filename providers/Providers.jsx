"use client";
import { TransitionProvider } from "@/context/TransitionContext";
import Transition from "@/helpers/Transition";
import RouteWatcher from "../hooks/RouteWatcher";
import SmoothScrollProvider from "./SmoothScroolProvider";

export default function Providers({ children }) {
    return (
        <TransitionProvider>
            <Transition />
            <RouteWatcher />
            <SmoothScrollProvider>
                {children}
            </SmoothScrollProvider>
        </TransitionProvider>
    );
}