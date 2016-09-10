import { NgModule } from '@angular/core'
import { SharedModule } from '../../shared'
import { Clans } from './clans'
import { routing } from './clans.routes'

@NgModule({
    imports: [SharedModule, routing],
    declarations: [Clans]
})

export class ClansModule {}
