export class CultureEvent {
    constructor(
        public cdbid: string,
        public checkinAllowed: boolean,
        public gracePeriodMonths: number,
        public locationId: string,
        public numberOfPoints: number,
        public organizerId: string,
        public organizerName: string,
        public price: string,
        public tariff: string,
        public title: string
    ) {}
}
