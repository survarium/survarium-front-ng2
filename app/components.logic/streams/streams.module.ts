import { NgModule } from '@angular/core'

import { SharedModule } from '../../shared'
import { routing } from './streams.routes'
import { StreamsFormats, StreamsFormatsService } from './streams__formats'
import { Streams } from './streams'
import { Twitch } from './twitch'
import { TwitchService } from '../../services/twitch'
/*import { YoutubeService } from '../../services/youtube'
import { Youtube } from './youtube'*/

@NgModule({
    imports: [SharedModule, routing],
    declarations: [
        Streams,
        StreamsFormats,
        Twitch,
        /*Youtube*/
    ],
    providers: [StreamsFormatsService, TwitchService/*, YoutubeService*/],
})

export class StreamsModule {}


