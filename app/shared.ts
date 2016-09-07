import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { I18NPipe } from './pipes/i18n'
import { DateTimePipe } from './pipes/datetime'
import { ElapsedPipe } from './pipes/elapsed'
import { NumberPipe } from './pipes/number'
import { PercentPipe } from './pipes/percent'

import { DIRECTIVES } from './directives'

@NgModule({
    imports: [CommonModule],
    declarations: [
        I18NPipe,
        DateTimePipe,
        ElapsedPipe,
        NumberPipe,
        PercentPipe,
        ...DIRECTIVES
    ],
    exports: [
        I18NPipe,
        DateTimePipe,
        ElapsedPipe,
        NumberPipe,
        PercentPipe,
        ...DIRECTIVES
    ],
    entryComponents: [
        ...DIRECTIVES
    ]
})

export class SharedModule {}
