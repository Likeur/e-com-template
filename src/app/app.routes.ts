import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'home',
        title:'Ecommerce template',
        loadComponent: () => import("./layout/home/home.component")
    },
    {
        path:'login',
        title:'login to ecomtemplate',
        loadComponent: () => import("./components/auth/login/login.component")
    },
    {
        path:'sign-up',
        title:'Sign up to ecomtemplate',
        loadComponent: () => import("./components/auth/sign-up/sign-up.component")
    },
    {
        path:'details',
        title:'Product details',
        loadComponent: () => import("./layout/product-page/product-page.component")
    },
    {
        path:'',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path:'**',
        title:'not found',
        loadComponent: () => import("./components/notfound/notfound.component")
    }
];
