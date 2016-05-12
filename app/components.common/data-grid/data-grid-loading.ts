import { Component } from '@angular/core'
import { I18NPipe } from '../../pipes/i18n'

@Component({
    selector: 'data-grid-loading',
    pipes: [I18NPipe],
    template: '<span>{{"loading" | i18n}}</span>',
    styles: [require('./data-grid-loading.css')]
})

export class DataGridLoading {}

export default DataGridLoading
