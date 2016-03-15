import { Component } from 'angular2/core'
import { RouteConfig, ROUTER_DIRECTIVES, AsyncRoute } from 'angular2/router'
import { StreamsFormats, StreamsFormatsService } from './streams__formats'

@Component({
    selector: 'streams',
    directives: [ROUTER_DIRECTIVES, StreamsFormats],
    providers: [StreamsFormatsService],
    styles: [require('../../components.common/sub-nav/sub-nav.styl')],
    template: require('./streams.html')
})

@RouteConfig([
    new AsyncRoute({ path: '/youtube', loader: () => require('es6-promise!./youtube')('Youtube'), name: 'StreamsYoutube', useAsDefault: true }),
    new AsyncRoute({ path: '/twitch',  loader: () => require('es6-promise!./twitch')('Twitch'), name: 'StreamsTwitch' })
])

export class Streams {}


