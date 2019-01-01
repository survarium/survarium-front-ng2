import { Component, Input } from '@angular/core'
import { i18n } from '../../services/i18n'

@Component({
    selector: 'schedule',
    template: require('./schedule.html'),
    styles: [require('./schedule.styl')]
})

export class Schedule {
    data = [
        { date: '2018.12.24', events: [null, null, 'Market - Army'] },
        { date: '2018.12.25', events: ['Scavengers - Market', 'Market - Army', 'Army - Settlers'] },
        { date: '2018.12.26', events: ['Settlers - Scavengers', 'Scavengers - Army', 'Market - Settlers'] },
        { date: '2018.12.27', events: ['Market - Army', 'Army - Settlers', 'Settlers - Scavengers'] },
        { date: '2018.12.28', events: ['Scavengers - Army', 'Market - Settlers', 'Scavengers - Market'] },
        { date: '2018.12.29', events: ['Army - Settlers', 'Settlers - Scavengers', 'Scavengers - Army'] },
        { date: '2018.12.30', events: ['Market - Settlers', 'Scavengers - Market', 'Market - Army'] },
        { date: '2018.12.31', events: ['Settlers - Scavengers', 'Scavengers - Army', 'Market - Settlers'] },
        { date: '2019.01.01', events: ['Scavengers - Market', 'Market - Army', 'Army - Settlers'] },
        { date: '2019.01.02', events: ['Scavengers - Army', 'Market - Settlers', 'Scavengers - Market'] },
        { date: '2019.01.03', events: ['Market - Army', 'Army - Settlers', 'Settlers - Scavengers'] },
        { date: '2019.01.04', events: ['Market - Settlers', 'Scavengers - Market', 'Market - Army'] },
        { date: '2019.01.05', events: ['Army - Settlers', 'Settlers - Scavengers', 'Scavengers - Army'] },
        { date: '2019.01.06', events: ['Army - Settlers', 'Scavengers - Market', 'Market - Army'] },
        { date: '2019.01.07', events: ['Market - Settlers', 'Settlers - Scavengers', 'Scavengers - Army'] },
        { date: '2019.01.08', events: ['Settlers - Army', 'Market - Scavengers', 'Settlers - Scavengers'] }
    ];

    private translator(key) {
        return i18n.get('factions.' + {
            Scavengers: 'scavengers',
            Market: 'blackMarket',
            Army: 'renaissance',
            Settlers: 'edge'
        }[key]);
    }

    schedule :any = null;
    times = [2, 10, 18];
    render :any;

    @Input('till') private till :string;

    ngOnInit() {
        const eventDuration = 3;

        this.schedule = this.data.reduce((schedule, { date, events }, dayIndex) => {
            let dateParts = date.split('.').map(Number);
            let pointer = new Date(Date.UTC(dateParts[0], dateParts[1] - 1, dateParts[2], 0, 0, 0, 0));

            events.forEach((event, index) => {
                if (!event) {
                    return;
                }

                let day = pointer.getTime();
                let start = pointer.setUTCHours(this.times[index]);
                let end = pointer.setUTCHours(pointer.getUTCHours() + eventDuration);

                schedule.push({
                    dayIndex,
                    index,
                    day,
                    start: new Date(start),
                    vs: event.split(' - ').map(this.translator).join(' - '),
                    end: new Date(end)
                });
            });

            return schedule;
        }, []);

        if (new Date() > new Date(this.till)) {
            return;
        }

        this.render = this.schedule.reduce((render, event) => {
            let { dayIndex, day } = event;
            let elem = render[dayIndex] || (render[dayIndex] = {
                date: new Date(day),
                events: []
            });

            elem.events.push(event);

            return render;
        }, []);

        this.updateCurrent();
    }

    private current = { day: null, event: null, active: false };
    private nextUpdate :number;

    updateCurrent() {
        const { schedule, current } = this;
        const now = new Date();

        let currentSet = false;

        for (let i = 0, event, length = schedule.length; i < length; i++) {
            event = schedule[i];

            if (event.end < now) {
                continue;
            }

            current.day = event.dayIndex;
            current.event = event.index;
            current.active = event.start < now;

            currentSet = true;

            break;
        }

        if (!currentSet) {
            current.day = null;
            current.event = null;
            current.active = false;

            return;
        }

        this.nextUpdate = setTimeout(this.updateCurrent.bind(this), 60 * 1000);
    }

    ngOnDestroy () {
        clearTimeout(this.nextUpdate);
    }

    visibility = 'future';

    changeVisibility () {
        this.visibility = this.visibility === 'future' ? 'all' : 'future'
    }
}
