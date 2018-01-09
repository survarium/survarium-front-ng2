import { NgModule } from '@angular/core'

import { SharedModule } from '../../shared'
import { Info } from './info'
import { DevMessages } from './dev-messages'
import { About } from './about'
import { Bans } from './bans'
import { Thanks } from './thanks'
import { Donate } from '../../components.common/donate/donate';
import { DonateYamoneyModule } from '../../components.common/donate-yamoney/donate-yamoney.module';
import { DonateThanks } from './donate-thanks';
import { routing  } from './info.routing'

@NgModule({
    imports: [SharedModule, DonateYamoneyModule, routing],
    declarations: [Info, DevMessages, About, Bans, Thanks, Donate, DonateThanks]
})

export class InfoModule {}
