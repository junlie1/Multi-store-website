import AboutPage from "../pages/AboutPage/AboutPage";
import CategoriesPage from "../pages/CategoriesPage/CategoriesPage";
import Home from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import ProductDetailPage from "../pages/ProductDetailPage/ProductDetailPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import SearchPage from "../pages/SearchPage/SearchPage";

export const routes = [
    {
        path: '/',
        page: Home,
    },
    {
        path: '/about',
        page: AboutPage,
    },
    {
        path: '/categories/:category',
        page: CategoriesPage,
    },
    {
        path: '/login',
        page: LoginPage,
    },
    {
        path: '/register',
        page: SignUpPage,
    },
    {
        path: '/product-details/:_id',
        page: ProductDetailPage,
    },

    {
        path: '/search', 
        page: SearchPage,
    },
]
