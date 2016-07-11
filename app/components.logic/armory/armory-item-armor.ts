import { Component, Input } from '@angular/core'
import { I18NPipe } from '../../pipes/i18n'
import { NumberPipe } from '../../pipes/number'
import { PercentPipe } from '../../pipes/percent'

@Component({
    selector: '[armor]',
    inputs: ['verData'],
    directives: [],
    template: require('./armory-item-armor.html'),
    styles: [require('./armory-item-armor.styl')],
    pipes: [I18NPipe, NumberPipe, PercentPipe]
})

export class ArmoryItemArmor {
    @Input() private verData :any;
    private hitTypes :any[];

    ngOnInit() {
        let hit_params = this.verData.hit_params;

        if (hit_params) {
            let result = [];
            let skipParams = ['stamina', 'speed'];

            Object.keys(hit_params).forEach(target => {
                let hit :any = [{ target, colspan: 2 }];

                let hitParam = hit_params[target].hit_types;

                Object.keys(hitParam).forEach(type => {
                    if (~skipParams.indexOf(type)) {
                        return;
                    }

                    let param = hitParam[type];

                    hit.push(
                        { type, colspan: 2 },
                        { name: 'armor', showValue: true, value: param.armor },
                        { name: 'bleeding_protection', showValue: true, value: param.bleeding_protection }
                    );
                });

                result.push(hit);
            });

            this.hitTypes = result;
        }
    }
}
