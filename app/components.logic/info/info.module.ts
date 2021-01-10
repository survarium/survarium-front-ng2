import { NgModule } from '@angular/core'

import { SharedModule } from '../../shared'
import { Info } from './info'
import { DevMessages } from './dev-messages'
import { DevMessage } from './dev-message'
import { About } from './about'
import { routing  } from './info.routing'
import { Thanks } from './thanks'

@NgModule({
    imports: [SharedModule, routing],
    declarations: [Info, DevMessages, DevMessage, About, Thanks]
})

export class InfoModule {}
