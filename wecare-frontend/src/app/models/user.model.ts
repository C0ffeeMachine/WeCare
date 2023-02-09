export class User {
    constructor(
        public userId: string,
        public name: string,
        public gender : string,
        public dateOfBirth : string,
        public password : string,
        public mobileNumber : number,
        public email: string,
        public pincode: number,
        public city: string,
        public state: string,
        public country: string
    ) {}
}