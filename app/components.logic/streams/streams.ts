import { Component } from '@angular/core'
//import { RouteConfig, AsyncRoute } from '@angular/router-deprecated'

@Component({
    styles: [require('../../components.common/sub-nav/sub-nav.styl')],
    template: require('./streams.html')
})

/*@RouteConfig([
    new AsyncRoute({ path: '/youtube', loader: () => require('es6-promise!./youtube')('Youtube'), name: 'StreamsYoutube', useAsDefault: true }),
    new AsyncRoute({ path: '/twitch',  loader: () => require('es6-promise!./twitch')('Twitch'), name: 'StreamsTwitch' })
])*/

export class Streams {}


