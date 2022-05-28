type ConstructorParams = {
    date: Date;
}


export class Transaction {
    public date: Date;

    constructor({
        date
    }: ConstructorParams) {
        this.date = date
    }
}