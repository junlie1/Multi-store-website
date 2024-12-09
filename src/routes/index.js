import AboutPage from "../pages/AboutPage/AboutPage";
import CartPage from "../pages/CartPage/CartPage";
import CategoriesPage from "../pages/CategoriesPage/CategoriesPage";
import Home from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import OrderSuccess from "../pages/OrderSuccess/OrderSuccess";
import PaymentPage from "../pages/PaymentPage/PaymentPage";
import ProductDetailPage from "../pages/ProductDetailPage/ProductDetailPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";

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
        path: '/cart',
        page: CartPage,
    },
    {
        path: '/profile-user',
        page: ProfilePage,
    },
    {
        path: '/payment',
        page: PaymentPage,
    },
    {
        path: '/order-success',
        page: OrderSuccess,
    },
]
