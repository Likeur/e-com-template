import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        title:'home',
        loadComponent: () => import("./layout/home/home.component")
    },
    {
        path:'**',
        loadComponent: () => import("./components/notfound/notfound.component")
    }
];
