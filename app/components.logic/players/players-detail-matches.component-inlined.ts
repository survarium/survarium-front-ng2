import { Component, Input, Optional } from 'angular2/core'
import { DatePipe } from 'angular2/common'
import DataTable from '../../components.common/data-grid/data-grid'
import DataTableCell from '../../components.common/data-grid/data-grid-cell'
import DataTableTitle from '../../components.common/data-grid/data-grid-cell-title'

let lang = 'english';

let columns :any[] = [
    { title: 'Date', width: 150, cell: `row.date` },
    { title: 'Match', cell: `row.match.id` },
    { title: 'Map', cell: `row.map.lang.${lang}.name`, width: 200 },
    { title: 'Mode', cell: `row.map.lang.${lang}.mode`, width: 200 },
    { title: 'Level', cell: `row.match.level` },
    { title: 'Win', cell: `row.victory` },
    { title: 'Kills', cell: `row.kills` },
    { title: 'Dies', cell: `row.dies` },
    { title: 'KD', cell: `row.kd` },
    { title: 'Score', cell: `row.score` },
    { title: 'Headshots', cell: `row.headshots` },
    { title: 'GrenadeKills', cell: `row.grenadeKills` },
    { title: 'MeleeKills', cell: `row.meleeKills` },
    { title: 'ArtefactKills', cell: `row.artefactKills` },
    { title: 'ArtefactUses', cell: `row.artefactUses` },
    { title: 'PointCaptures', cell: `row.pointCaptures` },
    { title: 'BoxesBringed', cell: `row.boxesBringed` }
];

let rowTpl = (() => {
    var index = -1;
    return columns.reduce((result, column) => {
        index++;
        return result += `<data-grid-cell [row]="row" [cell]="columns[${index}]" [rowIndex]="i" [cellIndex]="${index}" (cellClick)="cellClick($event)">{{${column.column}}}</data-grid-cell>`
    }, '');
})();

@Component({
    selector: 'players-detail-matches',
    directives: [DataTable, DataTableCell, DataTableTitle],
    providers: [DatePipe],
    inputs: ['data', 'lang'],
    template: `<data-grid [data]="data" [columns]="columns">
        <div class="header">
            <data-grid-cell-title *ngFor="#column of columns, #i=index" [cell]="column" [cellIndex]="i" (cellClick)="headerClick($event)"></data-grid-cell-title>
        </div>
        <div class="body">
            <div *ngFor="#row of data, #i=index" class="row">
                ${rowTpl}
            </div>
        </div>
    </data-grid>`
})

export default class PlayersDetailMatches {
    @Input() data :any = {};
    @Input() @Optional() lang :string = 'english';

    private columns = columns.slice();

    constructor () {}

}
