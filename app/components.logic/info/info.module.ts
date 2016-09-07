import { NgModule } from '@angular/core'

import { SharedModule } from '../../shared'
import { Info } from './info'
import { DevMessages } from './dev-messages'
import { About } from './about'
import { Bans } from './bans'
import { Thanks } from './thanks'
import { routing  } from './info.routing'

@NgModule({
    imports: [SharedModule, routing],
    declarations: [Info, DevMessages, About, Bans, Thanks]
})

export class InfoModule {}
