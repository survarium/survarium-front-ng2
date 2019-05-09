import { Component, Input } from '@angular/core'
import { i18n } from '../../services/i18n'

@Component({
    selector: 'schedule',
    template: require('./schedule.html'),
    styles: [require('./schedule.styl')]
})

export class Schedule {
    data = [
        { date: '2019.05.08', events: [null, 'Scavengers - Settlers'] },
        { date: '2019.05.09', events: ['Scavengers - Market', 'Settlers - Army'] },
        { date: '2019.05.10', events: ['Settlers - Scavengers',	'Army - Market'] },
        { date: '2019.05.11', events: ['Army - Settlers',	'Market - Scavengers'] },
        { date: '2019.05.12', events: ['Market - Army', 'Scavengers - Settlers'] },
        { date: '2019.05.13', events: ['Scavengers - Market', 'Settlers - Army'] },
        { date: '2019.05.14', events: ['Settlers - Scavengers', 'Army - Market'] },
        { date: '2019.05.15', events: ['Army - Settlers', 'Market - Scavengers'] },
        { date: '2019.05.16', events: ['Market - Army', null] }
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
    times = [1, 13];
    render :any;
    eventDuration = 10;

    @Input('till') private till :string;

    ngOnInit() {
        if (new Date() > new Date(this.till)) {
            return;
        }

        this.schedule = this.data.reduce((schedule, { date, events }, dayIndex) => {
            let dateParts = date.split('.').map(Number);
            let pointer = new Date(Date.UTC(dateParts[0], dateParts[1] - 1, dateParts[2], 0, 0, 0, 0));

            events.forEach((event, index) => {
                if (!event) {
                    return;
                }

                let day = pointer.getTime();
                let start = pointer.setUTCHours(this.times[index]);
                let end = pointer.setUTCHours(pointer.getUTCHours() + this.eventDuration);

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

    private current = { day: null, event: null, active: false, progress: 0 };
    private nextUpdate :number;

    updateCurrent() {
        const { schedule, current } = this;
        const now = new Date();

        let currentSet = false;
        let event;

        for (let i = 0, length = schedule.length; i < length; i++) {
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
            current.progress = 0;

            return;
        }

        if (current.active) {
            current.progress = (now.getTime() - event.start.getTime()) / (this.eventDuration * 60 * 60 * 1000) * 100;
        } else {
            current.progress = 0;
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
