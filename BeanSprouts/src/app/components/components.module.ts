import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BarmainComponent } from './barmain/barmain.component';

@NgModule ({
    declarations:[BarmainComponent],
    exports:[BarmainComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ComponentsModule {}
