"use client";
import { TransitionProvider } from "@/context/TransitionContext";
import Transition from "@/helpers/Transition";
import RouteWatcher from "./RouteWatcher";

export default function Providers({ children }) {
    return (
        <TransitionProvider>
            <Transition />
            <RouteWatcher />
            {children}
        </TransitionProvider>
    );
}