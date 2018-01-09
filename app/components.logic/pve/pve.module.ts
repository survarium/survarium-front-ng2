import { NgModule } from '@angular/core'

import { SharedModule } from '../../shared'
import { Pve } from './pve'
import { PvePage } from './pve-page'
import { DonateYamoneyModule } from '../../components.common/donate-yamoney/donate-yamoney.module'
import { routing } from './pve.routing'

@NgModule({
    imports: [SharedModule, DonateYamoneyModule, routing],
    declarations: [Pve, PvePage]
})

export class PveModule {}
