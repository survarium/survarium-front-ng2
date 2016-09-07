import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { SharedModule } from '../../shared'
import { Armory } from './armory'
import { ArmoryListModule } from './armory-list'
import { ArmoryItemModule } from './armory-item'
import { routing } from './armory.routing'

@NgModule({
    imports: [CommonModule, SharedModule, routing, ArmoryItemModule, ArmoryListModule],
    declarations: [Armory]
})

export class ArmoryModule {}
