import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/atendimentos")({
  staticData: { sitemap: false },
  component: () => <Outlet />,
});
