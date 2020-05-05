import { Component, Input } from '@angular/core';
import { i18n } from '../../services/i18n';

@Component({
    selector: 'schedule',
    template: require('./schedule.html'),
    styles: [require('./schedule.styl')]
})

export class Schedule {
    @Input('till') private till :string;

    private translator(key) {
        return i18n.get('factions.' + {
            Scavengers: 'scavengers',
            'Black Market': 'blackMarket',
            'The Renaissance Army': 'renaissance',
            'The Fringe Settlers': 'edge'
        }[key]);
    }

    private current = { day: null, event: null, active: false, progress: 0 };
    private nextUpdate :number;

    data = [
        { date: '2020.05.08', events: [null, 'Scavengers - The Fringe Settlers'] },
        { date: '2020.05.09', events: ['Scavengers - Black Market', 'The Fringe Settlers - The Renaissance Army'] },
        { date: '2020.05.10', events: ['The Fringe Settlers - Scavengers', 'The Renaissance Army - Black Market'] },
        { date: '2020.05.11', events: ['The Renaissance Army - The Fringe Settlers', 'Black Market - Scavengers'] },
        { date: '2020.05.12', events: ['Black Market - The Renaissance Army', 'Scavengers - The Fringe Settlers'] },
        { date: '2020.05.13', events: ['Scavengers - Black Market', 'The Fringe Settlers - The Renaissance Army'] },
        { date: '2020.05.14', events: ['The Fringe Settlers - Scavengers', 'The Renaissance Army - Black Market'] },
        { date: '2020.05.15', events: ['The Renaissance Army - The Fringe Settlers', 'Black Market - Scavengers'] },
        { date: '2020.05.16', events: ['Black Market - The Renaissance Army', 'Scavengers - The Fringe Settlers'] },
        { date: '2020.05.17', events: ['Black Market - Scavengers', 'The Renaissance Army - Black Market'] },
        { date: '2020.05.18', events: ['The Fringe Settlers - The Renaissance Army', null] }
    ];

    now = new Date();
    schedule :any = null;
    times = [1, 13];
    render :any;
    eventDuration = 10;
    visibility = 'future';

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

    updateCurrent() {
        const { schedule, current } = this;
        const now = this.now;

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

    changeVisibility () {
        this.visibility = this.visibility === 'future' ? 'all' : 'future';
    }
}
