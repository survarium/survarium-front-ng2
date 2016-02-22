import { Injectable, Component } from 'angular2/core'
import { Title as TitleProvider } from 'angular2/platform/browser'

@Injectable()
export class TitleService {
    constructor(private title: TitleProvider) {}

    setTitle(title :string) {
        this.title.setTitle(title)
    }
}

export default TitleService
