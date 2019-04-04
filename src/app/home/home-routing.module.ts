import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePage} from './home.page';

const routes: Routes = [
    {
        path: '',
        component: HomePage,
    },
    {
        path: 'punten',
        loadChildren: './punten/punten.module#PuntenPageModule'
    },
    { path: 'discover', loadChildren: './home/discover/discover.module#DiscoverPageModule'}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule {}
