import { Component, Input } from 'angular2/core'

@Component({
    selector: 'players-detail-counts',
    template: `
        <h4 class="def-list__title">{{i18n.progress}}</h4>
        <div class="def-list__values">
            <dl class="def-list">
              <dt class="def-list__term">{{i18n.level}}</dt>
              <dd class="def-list__desc">{{data.progress.level}}</dd>
            </dl>

            <dl class="def-list">
              <dt class="def-list__term">{{i18n.rating}}</dt>
              <dd class="def-list__desc">{{data.progress.elo}}</dd>
            </dl>

            <dl class="def-list">
              <dt class="def-list__term">{{i18n.exp}}</dt>
              <dd class="def-list__desc">{{data.progress.experience}}</dd>
            </dl>
        </div>

        <h4 class="def-list__title">{{i18n.actions}}</h4>
        <div class="def-list__values">
            <dl class="def-list">
              <dt class="def-list__term">{{i18n.kills}}</dt>
              <dd class="def-list__desc">{{data.total.kills}}</dd>

            </dl>

            <dl class="def-list">
              <dt class="def-list__term">{{i18n.dies}}</dt>
              <dd class="def-list__desc">{{data.total.dies}}</dd>

            </dl>

            <dl class="def-list">
              <dt class="def-list__term">{{i18n.kd}}</dt>
              <dd class="def-list__desc">{{data.total.kd}}</dd>
            </dl>

            <dl class="def-list">
              <dt class="def-list__term">{{i18n.victories}}</dt>
              <dd class="def-list__desc">{{data.total.victories}}</dd>
            </dl>

            <dl class="def-list">
              <dt class="def-list__term">{{i18n.looses}}</dt>
              <dd class="def-list__desc">{{data.total.matches - data.total.victories}}</dd>
            </dl>

            <dl class="def-list">
              <dt class="def-list__term">{{i18n.totalMatches}}</dt>
              <dd class="def-list__desc">{{data.total.matches}}</dd>
            </dl>

            <dl class="def-list">
              <dt class="def-list__term">{{i18n.winrate}}</dt>
              <dd class="def-list__desc">{{(data.total.winRate).toFixed(2)}} %</dd>
            </dl>

            <dl class="def-list">
              <dt class="def-list__term">{{i18n.avgScore}}</dt>
              <dd class="def-list__desc">{{data.total.scoreAvg}}</dd>
            </dl>
        </div>

        <h4 class="def-list__title">{{i18n.details}}</h4>
        <div class="def-list__values">
            <dl class="def-list">
              <dt class="def-list__term">{{i18n.headshots.full}}</dt>
              <dd class="def-list__desc">{{data.total.headshots}}</dd>
            </dl>

            <dl class="def-list">
              <dt class="def-list__term">{{i18n.boxesBringed.full}}</dt>
              <dd class="def-list__desc">{{data.total.boxesBringed}}</dd>
            </dl>

            <dl class="def-list">
              <dt class="def-list__term">{{i18n.pointCaptures.full}}</dt>
              <dd class="def-list__desc">{{data.total.pointCaptures}}</dd>
            </dl>

            <dl class="def-list">
              <dt class="def-list__term">{{i18n.grenadeKills.full}}</dt>
              <dd class="def-list__desc">{{data.total.grenadeKills}}</dd>
            </dl>

            <dl class="def-list">
              <dt class="def-list__term">{{i18n.meleeKills.full}}</dt>
              <dd class="def-list__desc">{{data.total.meleeKills}}</dd>
            </dl>

            <dl class="def-list">
              <dt class="def-list__term">{{i18n.artefactKills.full}}</dt>
              <dd class="def-list__desc">{{data.total.artefactKills}}</dd>
            </dl>

            <dl class="def-list">
              <dt class="def-list__term">{{i18n.artefactUses.full}}</dt>
              <dd class="def-list__desc">{{data.total.artefactUses}}</dd>
            </dl>
        </div>
    `
})

export default class PlayersDetailCountComponent {
    @Input() data :any = {};

    private i18n :any = {
        headshots: {},
        boxesBringed: {},
        pointCaptures: {},
        grenadeKills: {},
        meleeKills: {},
        artefactKills: {},
        artefactUses: {}
    };
}
