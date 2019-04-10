import {CultureEvent} from './cultureEvent';

export class EventResponse {
    constructor(
        public code: string,
        public cultureEvent: CultureEvent,
        public autodetect: Boolean,
        public checkinFromDate: string,
        public checkinCode: string
    ) {}

    getCultureEvent() {
        return this.cultureEvent;
    }
}