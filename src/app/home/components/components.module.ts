import {NgModule} from '@angular/core';
import {LocationHeaderComponent} from './location-header/location-header.component';
import {IonicModule} from '@ionic/angular';
import {CommonModule} from '@angular/common';

@NgModule({
    imports: [
        IonicModule,
        CommonModule
    ],
    declarations: [
        LocationHeaderComponent
    ],
    exports: [
        LocationHeaderComponent
    ]
})

export class ComponentsModule {}
