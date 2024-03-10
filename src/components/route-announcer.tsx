import { announce } from "@react-aria/live-announcer";
import { useMatches, useRouter } from "@tanstack/react-router";
import { useEffect } from "react";

export function RouteAnnouncer() {
    const { subscribe } = useRouter();
    const matches = useMatches();

    useEffect(() => {
        const unsubscribeFn = subscribe("onResolved", ({ toLocation }) => {
            const title = matches[matches.length - 1]?.staticData?.title;
            announce(`Navigated to ${title ?? toLocation.pathname}`);
        });

        return () => unsubscribeFn();
    }, [matches, subscribe]);

    return null;
}
