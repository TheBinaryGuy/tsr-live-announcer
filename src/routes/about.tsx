import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
    component: About,
    staticData: {
        title: "About",
    },
});

function About() {
    return <div className="p-2">Hello from About!</div>;
}
