import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared'
import { DonateYamoney} from './donate-yamoney';

@NgModule({
    imports: [SharedModule],
    declarations: [
        DonateYamoney
    ],
    exports: [DonateYamoney]
})
export class DonateYamoneyModule { }
