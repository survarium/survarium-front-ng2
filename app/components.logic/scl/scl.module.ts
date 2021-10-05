import { NgModule } from '@angular/core'

import { SharedModule } from '../../shared'
import { Scl } from './scl'
import { Scl1 } from './scl1'
import { Scl2 } from './scl2'
import { routing  } from './scl.routing'

@NgModule({
    imports: [SharedModule, routing],
    declarations: [Scl, Scl1, Scl2]
})

export class SclModule {}
