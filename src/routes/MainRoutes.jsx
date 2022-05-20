/**
 * @author Alberto González
 *
 */
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
  } from "react-router-dom";
import { App } from '../app/App';
import { LoginComponent } from "../components/auth/LoginComponent";
import { Dashboard } from '../pages/admin/Dashboard'
import { OrdersPage } from "../pages/orders/OrdersPage";
import { E404 } from '../pages/error/404';
import { Principal } from "../pages/Principal";
import { ProfilePage } from "../pages/user/ProfilePage";
import { ScrollPage } from "../testComponents/ScrollPage";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { CreateOrdersPage } from "../pages/orders/CreateOrdersPage";
import { StockPage } from "../pages/component/StockPage";
import { ProcessPage } from "../pages/production/ProcessPage";
import { SectionPage } from "../pages/production/SectionPage";
import { LinePage } from "../pages/production/LinePage";
import { ComponentsPage } from "../pages/component/ComponentsPage";
import { CreateComponentsPage } from "../pages/component/CreateComponentsPage";
import { AccountsPage } from "../pages/admin/AccountsPage";

export const MainRoutes = () => {

    const privateRoutes = <PrivateRoute element={<App/>}/>;

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ privateRoutes }>
                    <Route index element={ <Principal/> }/>
                    <Route path="scroll-page" element={ <ScrollPage/> }/>
                    <Route path="user/:username" element={ <ProfilePage/> }/>
                    <Route path="settings" element={ <h1><strong>Configuración:</strong> En esta página aparecen las configuraciones de la cuenta.</h1> }/>
                </Route>
                <Route path="orders" element={ privateRoutes }>
                    <Route index element={ <OrdersPage/> }/>
                    <Route path="create" element={ <CreateOrdersPage/> }/>
                </Route>
                <Route path="production" element={ privateRoutes }>
                    <Route index element={ <Navigate replace to="line"/> }/>
                    <Route path="line" element={ <LinePage/> }/>
                    <Route path="section" element={ <SectionPage/> }/>
                    <Route path="process" element={ <ProcessPage/> }/>
                </Route>
                <Route path="components" element={ privateRoutes }>
                    <Route index element={ <ComponentsPage/> }/>
                    <Route path="create" element={ <CreateComponentsPage/> }/>
                    <Route path="stock" element={ <StockPage/> }/>
                </Route>
                <Route path="admin" element={ privateRoutes }>
                    <Route index element={ <Dashboard/> }/>
                    <Route path="accounts" element={ <AccountsPage/> }/>
                </Route>
                <Route path="auth" element={ <PublicRoute/> }>
                    <Route index element={ <Navigate replace to="login"/> }/>
                    <Route path="login" element={ <LoginComponent/> }/>
                </Route>
                <Route path="*" element={ <E404/> }/>
            </Routes>
        </BrowserRouter>
    );
}