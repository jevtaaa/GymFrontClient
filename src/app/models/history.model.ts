import { Training } from '../models/training.model';

export class History {
    constructor(private date: Date, private training: Training, private comment: string) {}

    getDate() {
        return this.date;
    }        
    getTraining() {
        return this.training;
    }
    getComment() {
        return this.comment;
    }
    

    setDate(date: Date) {
        this.date = date;
    }

    setTraining(training: Training) {
        this.training = training;
    }

    setComment(comment: string) {
        this.comment = comment;
    }
}