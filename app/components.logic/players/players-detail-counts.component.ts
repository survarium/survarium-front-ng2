import { Component } from 'angular2/core'
import { I18NPipe } from '../../services/i18n'

@Component({
    selector: 'players-detail-counts',
    pipes: [I18NPipe],
    inputs: ['data'],
    template: `
        <h4 class="def-list__title">{{'progress' | i18n}}</h4>
        <div class="def-list__values">
            <dl class="def-list">
              <dt class="def-list__term">{{'level' | i18n}}</dt>
              <dd class="def-list__desc">{{data.progress.level}}</dd>
            </dl>

            <dl class="def-list">
              <dt class="def-list__term">{{'rating' | i18n}}</dt>
              <dd class="def-list__desc">{{data.progress.elo}}</dd>
            </dl>

            <dl class="def-list">
              <dt class="def-list__term">{{'exp' | i18n}}</dt>
              <dd class="def-list__desc">{{data.progress.experience}}</dd>
            </dl>

            <dl class="def-list">
              <dt class="def-list__term">{{'kills' | i18n}}</dt>
              <dd class="def-list__desc">{{data.total.kills}}</dd>

            </dl>

            <dl class="def-list">
              <dt class="def-list__term">{{'dies' | i18n}}</dt>
              <dd class="def-list__desc">{{data.total.dies}}</dd>

            </dl>

            <dl class="def-list">
              <dt class="def-list__term">{{'kd' | i18n}}</dt>
              <dd class="def-list__desc">{{data.total.kd}}</dd>
            </dl>

            <dl class="def-list">
              <dt class="def-list__term">{{'victories' | i18n}}</dt>
              <dd class="def-list__desc">{{data.total.victories}}</dd>
            </dl>

            <dl class="def-list">
              <dt class="def-list__term">{{'looses' | i18n}}</dt>
              <dd class="def-list__desc">{{data.total.matches - data.total.victories}}</dd>
            </dl>

            <dl class="def-list">
              <dt class="def-list__term">{{'totalMatches' | i18n}}</dt>
              <dd class="def-list__desc">{{data.total.matches}}</dd>
            </dl>

            <dl class="def-list">
              <dt class="def-list__term">{{'winrate' | i18n}}</dt>
              <dd class="def-list__desc">{{(data.total.winRate).toFixed(2)}} %</dd>
            </dl>

            <dl class="def-list">
              <dt class="def-list__term">{{'avgScore' | i18n}}</dt>
              <dd class="def-list__desc">{{data.total.scoreAvg}}</dd>
            </dl>
        </div>

        <!--<h4 class="def-list__title">{{'actions' | i18n}}</h4>
        <div class="def-list__values">
            <dl class="def-list">
              <dt class="def-list__term">{{'kills' | i18n}}</dt>
              <dd class="def-list__desc">{{data.total.kills}}</dd>

            </dl>

            <dl class="def-list">
              <dt class="def-list__term">{{'dies' | i18n}}</dt>
              <dd class="def-list__desc">{{data.total.dies}}</dd>

            </dl>

            <dl class="def-list">
              <dt class="def-list__term">{{'kd' | i18n}}</dt>
              <dd class="def-list__desc">{{data.total.kd}}</dd>
            </dl>

            <dl class="def-list">
              <dt class="def-list__term">{{'victories' | i18n}}</dt>
              <dd class="def-list__desc">{{data.total.victories}}</dd>
            </dl>

            <dl class="def-list">
              <dt class="def-list__term">{{'looses' | i18n}}</dt>
              <dd class="def-list__desc">{{data.total.matches - data.total.victories}}</dd>
            </dl>

            <dl class="def-list">
              <dt class="def-list__term">{{'totalMatches' | i18n}}</dt>
              <dd class="def-list__desc">{{data.total.matches}}</dd>
            </dl>

            <dl class="def-list">
              <dt class="def-list__term">{{'winrate' | i18n}}</dt>
              <dd class="def-list__desc">{{(data.total.winRate).toFixed(2)}} %</dd>
            </dl>

            <dl class="def-list">
              <dt class="def-list__term">{{'avgScore' | i18n}}</dt>
              <dd class="def-list__desc">{{data.total.scoreAvg}}</dd>
            </dl>
        </div>-->

        <h4 class="def-list__title">{{'details' | i18n}}</h4>
        <div class="def-list__values">
            <dl class="def-list">
              <dt class="def-list__term">{{'headshots' | i18n}}</dt>
              <dd class="def-list__desc">{{data.total.headshots}}</dd>
            </dl>

            <dl class="def-list">
              <dt class="def-list__term">{{'boxesBringed' | i18n}}</dt>
              <dd class="def-list__desc">{{data.total.boxesBringed}}</dd>
            </dl>

            <dl class="def-list">
              <dt class="def-list__term">{{'pointCaptures' | i18n}}</dt>
              <dd class="def-list__desc">{{data.total.pointCaptures}}</dd>
            </dl>

            <dl class="def-list">
              <dt class="def-list__term">{{'grenadeKills' | i18n}}</dt>
              <dd class="def-list__desc">{{data.total.grenadeKills}}</dd>
            </dl>

            <dl class="def-list">
              <dt class="def-list__term">{{'meleeKills' | i18n}}</dt>
              <dd class="def-list__desc">{{data.total.meleeKills}}</dd>
            </dl>

            <dl class="def-list">
              <dt class="def-list__term">{{'artefactKills' | i18n}}</dt>
              <dd class="def-list__desc">{{data.total.artefactKills}}</dd>
            </dl>

            <dl class="def-list">
              <dt class="def-list__term">{{'artefactUses' | i18n}}</dt>
              <dd class="def-list__desc">{{data.total.artefactUses}}</dd>
            </dl>
        </div>
    `
})

export default class PlayersDetailCountComponent { }
