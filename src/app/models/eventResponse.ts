import {CultureEvent} from './cultureEvent';

export class EventResponse {
    constructor(
        public code: string,
        public cultureEvent: CultureEvent,
        public autodetect: boolean,
        public checkinFromDate: string,
        public checkinCode: string
    ) {}
}