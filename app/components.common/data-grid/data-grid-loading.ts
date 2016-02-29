import { Component } from 'angular2/core'
import { I18NPipe } from '../../services/i18n'

@Component({
    selector: 'data-grid-loading',
    pipes: [I18NPipe],
    template: '<span>{{"loading" | i18n}}</span>',
    styles: [require('./data-grid-loading.css')]
})

export class DataGridLoading {}

export default DataGridLoading
