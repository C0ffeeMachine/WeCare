export class Booking {
    constructor(
        
        public appointmentDate: string,
        public slot: string,
        public coachId?: string,
        public userId?: string,
        public bookingId?: number
        ) {
    }
}