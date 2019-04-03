import {NgModule} from '@angular/core';
import {LocationHeaderComponent} from './location-header/location-header.component';
import {IonicModule} from '@ionic/angular';
import {CommonModule} from '@angular/common';
import {SmartphoneComponent} from './smartphone/smartphone.component';
import {NfcComponent} from './nfc/nfc.component';
import {PointsComponent} from './points/points.component';
import {VoordelenListComponent} from "./voordelen-list/voordelen-list.component";

@NgModule({
    imports: [
        IonicModule,
        CommonModule
    ],
    declarations: [
        LocationHeaderComponent,
        SmartphoneComponent,
        NfcComponent,
        PointsComponent,
        VoordelenListComponent
    ],
    exports: [
        LocationHeaderComponent,
        SmartphoneComponent,
        NfcComponent,
        PointsComponent,
        VoordelenListComponent
    ]
})

export class ComponentsModule {}
