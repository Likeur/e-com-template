import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'home',
        title:'Ecommerce template',
        loadComponent: () => import("./layout/home/home.component")
    },
    {
        path:'login',
        title:'login at ecomtemplate',
        loadComponent: () => import("./components/auth/login/login.component")
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
