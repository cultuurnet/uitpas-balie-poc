export class CultureEvent {
    constructor(
        public cdbid: string,
        public checkinAllowed: Boolean,
        public gracePeriodMonths: Number,
        public locationId: string,
        public numberOfPoints: Number,
        public organiserId: string,
        public organiserName: string,
        public price: string,
        public tariff: string,
        public title: string
    ) {}
}
