import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'

import { SharedModule } from '../../shared'
import { routing } from './clans-search.routes'

import { ClansSearch } from './clans-search'

@NgModule({
    imports: [SharedModule, FormsModule, routing],
    declarations: [ClansSearch]
})

export class ClansSearchModule {}
