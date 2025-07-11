import { Routes } from '@angular/router';

export const content: Routes = [
    {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.routes').then(r => r.dashboard),
        data: {
            title: "Dashboard",
            breadcrumb: "Dashboard"
        },
    },
];
