import { LazyExoticComponent, lazy } from "react";
import { NoLazy } from "../01-lazyload/pages/NoLazy";

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: JSXComponent | LazyExoticComponent<JSXComponent>;
  name: string;
}

const LazyLayout = lazy(
  () =>
    import(
      /* webpackChunkName: "LazyLayout" */ "../01-lazyload/layout/LazyLayout"
    )
);

export const routes: Route[] = [
  {
    path: "lazyload/*",
    to: "/lazyload/",
    Component: LazyLayout,
    name: "Lazy Layout",
  },
  {
    path: "no-lazy",
    to: "/no-lazy",
    Component: NoLazy,
    name: "No Lazy",
  },
];
