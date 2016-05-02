import { Component, Input, Inject } from 'angular2/core'
import { LangSwitcher } from '../../components.common/lang-switcher/lang-switcher'

@Component({
    selector: 'footer',
    template: require('./footer.html'),
    directives: [LangSwitcher],
    styles: [require('./footer.styl')]
})

export class Footer  {

    constructor (@Inject('CONFIG') private config) {}
}
export default Footer
