import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePage} from './home.page';
import {AuthGuard} from "../auth/auth.guard";

const routes: Routes = [
    {
        path: '',
        component: HomePage
    },
    {
        path: 'punten',
        loadChildren: './punten/punten.module#PuntenPageModule'
    },
    { path: 'discover', loadChildren: './discover/discover.module#DiscoverPageModule'}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule {}
