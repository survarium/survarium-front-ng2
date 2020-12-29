import { NgModule } from '@angular/core'

import { SharedModule } from '../../shared'
import { Info } from './info'
import { About } from './about'
import { routing  } from './info.routing'
import { Thanks } from './thanks'

@NgModule({
    imports: [SharedModule, routing],
    declarations: [Info, About, Thanks]
})

export class InfoModule {}
