import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
    staticData: {
        title: "About",
    },
}).lazy(() => import("./about.lazy").then((d) => d.Route));
