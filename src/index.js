/**
 * @author Alberto González
 *
 */
import React from 'react';
import "./scss/index.scss";
import ReactDOM from 'react-dom/client';
import {
    QueryClient,
    QueryClientProvider,
} from 'react-query';
import { Toaster } from 'react-hot-toast';
import { ReactQueryDevtools } from 'react-query/devtools';
import { MainRoutes } from './routes/MainRoutes';
import { AuthProvider } from './context/AuthProvider';
import { CustomProvider } from './context/CustomProvider';

const queryClient = new QueryClient();

document.title = "Industrial Process Management";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <CustomProvider>
                <AuthProvider>
                    <MainRoutes/>
                    <Toaster reverseOrder="false"/>
                </AuthProvider>
            </CustomProvider>
            <ReactQueryDevtools position="bottom-right"/>
        </QueryClientProvider>
    </React.StrictMode>
);