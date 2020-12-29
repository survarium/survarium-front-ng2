import { NgModule } from '@angular/core'

import { SharedModule } from '../../shared'
import { Pve } from './pve'
import { PvePage } from './pve-page'
import { routing } from './pve.routing'

@NgModule({
    imports: [SharedModule, routing],
    declarations: [Pve, PvePage]
})

export class PveModule {}
