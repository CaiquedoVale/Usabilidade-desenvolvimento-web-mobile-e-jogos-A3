import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/about", "routes/about.tsx"),
  route("/event", "routes/event.tsx"),
  route("*", "routes/pageNotFound.tsx"),
] satisfies RouteConfig;
