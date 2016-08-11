import { Component } from '@angular/core'

@Component({
    selector: 'data-grid-loading',
    template: '<span>{{"loading" | i18n}}</span>',
    styles: [require('./data-grid-loading.css')]
})

export class DataGridLoading {}

export default DataGridLoading
