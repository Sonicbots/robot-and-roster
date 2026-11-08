import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";

// Match routes without running loaders or rendering: loaders may need a server or
// network the test run lacks, and jsdom never loads the stylesheets React waits on.
describe("App routing", () => {
  it("matches a page for / instead of falling back to not found", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

    const matches = router.matchRoutes("/");

    expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
  });

  it.each(["drivetrain", "intake", "lift", "autonomous", "software", "design"])(
    "matches the standalone robot detail page for %s",
    (slug) => {
      const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });
      const matches = router.matchRoutes(`/robot/${slug}`);
      expect(matches.at(-1)?.routeId).toBe("/robot_/$slug");
      expect(matches.at(-1)?.params).toMatchObject({ slug });
      expect(matches.some((match) => match.routeId === "/robot")).toBe(false);
    },
  );
});
