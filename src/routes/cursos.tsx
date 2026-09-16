import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/cursos")({
  staticData: { sitemap: false },
  component: () => <Outlet />,
});
