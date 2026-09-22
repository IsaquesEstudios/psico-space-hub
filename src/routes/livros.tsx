import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/livros")({
  staticData: { sitemap: false },
  component: () => <Outlet />,
});