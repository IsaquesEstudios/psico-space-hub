import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/novidades")({
  staticData: { sitemap: false },
  component: () => <Outlet />,
});
