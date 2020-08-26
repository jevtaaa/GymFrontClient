import { Exercise } from '../models/exercise.model';

export class Training {
    constructor(private training_id: number, private name?: string, private description?: string, private date?: Date, private exercises?: Exercise[]) {}

    getId() {
        return this.training_id;
    }        
    getName() {
        return this.name;
    }
    getDescription() {
        return this.description;
    }
    getDate() {
        return this.date;
    }
    getExercises() {
        return this.exercises;
    }
    
    getLengthExercises() {
        if(this.exercises === undefined){
            return 0;
        }
        return this.exercises.length;
    }

    setId(id: number) {
        this.training_id = id;
    }        
    setName(name: string) {
        this.name = name;
    }
    setDescription(description: string) {
        this.description = description;
    }
    setReps(date: Date) {
        this.date = date;
    }
    setExercises(exercises: Exercise[]) {
        this.exercises = exercises;
    }

}