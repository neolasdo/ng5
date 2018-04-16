import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

// Import Containers
import {
    FullLayoutComponent,
    SimpleLayoutComponent
} from './containers';
import {AppLayoutComponent} from './containers/layout/app-layout.component';

export const routes: Routes = [
    // frontend routes
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: '', component: AppLayoutComponent, data: {title: 'Frontend'},
        children: [
            {path: 'home', loadChildren: './modules/frontend/home/home.module#HomeModule'},
        ]
    },
    // admin routes
    {path: 'admin', redirectTo: 'admin/user/login', pathMatch: 'full'},
    {path: 'admin', component: SimpleLayoutComponent,
        children: [
            {path: 'user', loadChildren: './modules/admin/user/user.module#UserModule'}
        ]
    },
    {path: 'admin', component: FullLayoutComponent, data: {title: 'Home'},
        children: [
            {path: 'dashboard', loadChildren: './modules/admin/dashboard/dashboard.module#DashboardModule'},
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
