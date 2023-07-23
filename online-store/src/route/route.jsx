import { lazy } from "react";
import * as paths from "./const";

const routes = {
    product_list: {
    path: paths.HOME,
    component: lazy(() => import("../components/ProductList")),
  },
  product_detail: {
    path: paths.PRODUCT_DETAIL,
    component: lazy(() => import("../components/ProductDetail")),
  },
  search: {
    path: paths.SEARCH,
    component: lazy(() => import("../components/Search")),
  },
}
export default routes;