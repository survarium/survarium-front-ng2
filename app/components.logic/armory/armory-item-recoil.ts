import { Component, Input, OnInit } from '@angular/core'

@Component({
    selector: '[recoil]',
    template: require('./armory-item-recoil.html'),
    styles: [require('./armory-item-recoil.styl')]
})

export class ArmoryItemRecoil implements OnInit {
    @Input() private recoil :any;
    @Input() private aim :any;

    show :any;

    showRecoil() {
        this.show = this.recoil;
    }

    showAim() {
        this.show = this.aim;
    }

    ngOnInit() {
        this.show = this.recoil;
    }
}
