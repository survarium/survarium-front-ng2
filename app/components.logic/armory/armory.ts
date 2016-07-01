import { Component } from '@angular/core'
import { RouteConfig, RouterOutlet, AsyncRoute } from '@angular/router-deprecated'

@Component({
    selector: 'armory',
    directives: [RouterOutlet],
    template: require('./armory.html'),
    styles: [require('./armory.styl')]
})

@RouteConfig([
    new AsyncRoute({ path: '/', loader: () => require('es6-promise!./armory-list')('ArmoryList'), name: 'ArmoryList', useAsDefault: true }),
    new AsyncRoute({ path: '/:item', loader: () => require('es6-promise!./armory-item')('ArmoryItem'), name: 'ArmoryItem' })
])

export class Armory {}
