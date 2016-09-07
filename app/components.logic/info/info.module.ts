import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { SharedModule } from '../../shared'
import { Info } from './info'
import { DevMessages } from './dev-messages'
import { About } from './about'
import { Bans } from './bans'
import { Thanks } from './thanks'
import { routing  } from './info.routing'

@NgModule({
    imports: [CommonModule, SharedModule, routing],
    declarations: [Info, DevMessages, About, Bans, Thanks]
})

export class InfoModule {}
