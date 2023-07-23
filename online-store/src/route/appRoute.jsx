import { BrowserRouter, Routes as Router, Route } from "react-router-dom";
import routes from "./route";
import Layout from "../layout";
import ProductList from "../components/ProductList";
import ProductDetail from "../components/ProductDetail";
import SearchPage from '../components/Search'

const PageRoutes = () => {
    return(

    <BrowserRouter>

        <Router>
            <Route
            element={<Layout />}
            >
            <Route
                path={routes.product_list.path}
                element={<ProductList />}
            />
             <Route
              path={routes.product_detail.path(":id")}
                element={<ProductDetail />}
            />
             <Route
                path={routes.search.path}
                element={<SearchPage />}
            />
            </Route>
        </Router>
    </BrowserRouter>
    )
}

export default PageRoutes
