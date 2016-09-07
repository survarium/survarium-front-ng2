const SKILLS = require('./skills_tree.json');
const BRANCHES = ['shooting', 'physical', 'anomaly'];
SKILLS[232].sign = -1;

import { Component, Input, OnInit } from '@angular/core'
import { I18N } from '../../services/i18n'

interface SKILLTYPE { id :number, points :number }

@Component({
    selector: 'skills',
    template: require('./skills.html'),
    styles: [require('./skills.styl')]
})

export class Skills implements OnInit {
    @Input() private skills :SKILLTYPE[];

    private tree :any;
    private lang :string;
    private branches = BRANCHES;
    constructor (private i18n :I18N) {
        this.lang = i18n.lang.lang;
    }

    ngOnInit() {
        let tree = {};

        this.branches.forEach(branch => tree[branch] = []);

        this.tree = this.skills.reduce((tree, data) => {
            const SKILL = SKILLS[data.id];

            let skill = {
                name: SKILL.name[this.lang],
                description: SKILL.description[this.lang],
                icon: `/assets/ui_icons/skills/${SKILL.branch}/${SKILL.icon}.png`,
                value: undefined,
                rank: undefined
            };

            let type = SKILL.type;
            if (type) {
                let mod = SKILL.mods[Object.keys(SKILL.mods)[0]];
                let value = mod[data.points - 1];

                if (type === 'seconds') {
                    value /= 1000;
                }

                if (SKILL.sign === -1) {
                    value *= -1;
                }

                if (SKILL.sign && value > 0) {
                    value = `+${value}`;
                }

                value += this.i18n.get(`skills.type.${type}`);

                skill.value = value;
                skill.rank = `${data.points}/${mod.length}`
            }

            tree[SKILL.branch].push(skill);
            return tree;
        }, tree);
    }
}

export default Skills
