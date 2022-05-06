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
import { Dashboard } from '../pages/admin/dashboard'
import { E404 } from '../pages/error/404';
import { Principal } from "../pages/Principal";
import { ProfilePage } from "../pages/user/ProfilePage";
import { Welcome } from "../pages/Welcome";
import { ScrollPage } from "../testComponents/ScrollPage";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const MainRoutes = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path = "/" element={ <PrivateRoute element={<App/>}/> }>
                    <Route index element={ <Principal/> }/>
                    <Route path="task" element={ <h1><strong>Task:</strong> Esto es una página de prueba</h1> }/>
                    <Route path="scroll-page" element={ <ScrollPage/> }/>
                    <Route path="user/:username" element={ <ProfilePage/> }/>
                    <Route path="prueba4" element={ <h1><strong>prueba 4:</strong> Esto es una página de prueba</h1> }/>
                    <Route path="prueba5" element={ <h1><strong>prueba 5:</strong> Esto es una página de prueba</h1> }/>
                    <Route path="prueba6" element={ <h1><strong>prueba 6:</strong> Esto es una página de prueba</h1> }/>
                    <Route path="prueba7" element={ <h1><strong>prueba 7:</strong> Esto es una página de prueba</h1> }/>
                </Route>
                <Route path="/admin" element={ <PrivateRoute element={<Dashboard/>}/> }>
                    <Route index element={ <Navigate replace to="dashboard"/> }/>
                    <Route path="dashboard" element={ <Dashboard/> }/>
                    <Route path="pruebas" element={<h1>Navigate funciona con location.</h1>}/>
                </Route>
                <Route path="/auth" element={ <PublicRoute/> }>
                    <Route index element={ <Navigate replace to="login"/> }/>
                    <Route path="login" element={ <LoginComponent/> }/>
                </Route>
                <Route path="*" element={ <E404/> }/>
            </Routes>
        </BrowserRouter>
    );
}