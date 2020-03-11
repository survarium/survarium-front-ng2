import { NgModule } from '@angular/core'

import { SharedModule } from '../../shared'
import { Armory } from './armory'
import { ArmoryListModule } from './armory-list'
import { ArmoryItemModule } from './armory-item'
import { ArmoryTTKModule } from './armory-ttk'
import { routing } from './armory.routing'

@NgModule({
    imports: [SharedModule, routing, ArmoryItemModule, ArmoryListModule, ArmoryTTKModule],
    declarations: [Armory]
})

export class ArmoryModule {}
